from fastapi import FastAPI, HTTPException
import requests  
import os
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

RAPIDAPI_KEY = os.getenv("RAPIDAPI_KEY")
RAPIDAPI_HOST = os.getenv("RAPIDAPI_HOST", "house-plants2.p.rapidapi.com")

HEADERS = {
    "X-RapidAPI-Key": RAPIDAPI_KEY,
    "X-RapidAPI-Host": RAPIDAPI_HOST
}

def fetch_api(url: str, not_found_message=None):
    try:
        response = requests.get(url, headers=HEADERS, timeout=10)
        if response.status_code == 404 and not_found_message:
            raise HTTPException(status_code=404, detail=not_found_message)
        response.raise_for_status() 
        return response.json()
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=502, detail=f"External API request failed: {str(e)}")
    except ValueError:
        raise HTTPException(status_code=500, detail="Failed to parse response JSON")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")

@app.get("/plants")
def get_plants():
    url = "https://house-plants2.p.rapidapi.com/all"
    plants = fetch_api(url)
    unique_plants = {}
    for plant in plants:
        latin_name = plant.get("Latin name")
        if latin_name and latin_name not in unique_plants:
            unique_plants[latin_name] = {
                "id": plant.get("id"),
                "latin": latin_name,
                "family": plant.get("Family"),
                "category": plant.get("Categories")
            } 
    return list(unique_plants.values())

@app.get("/plants/{plant_id}")
def get_plant_details(plant_id: str):
    url = f"https://house-plants2.p.rapidapi.com/id/{plant_id}"
    plant = fetch_api(url, not_found_message="Plant not found")
    if not plant:
        raise HTTPException(status_code=404, detail="Plant not found")
    return plant