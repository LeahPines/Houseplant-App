import pytest
from fastapi.testclient import TestClient
from unittest.mock import patch, Mock
from main import app

client = TestClient(app)

mock_plants = [
    {
        "id": "123",
        "Latin name": "Ficus lyrata",
        "Family": "Moraceae",
        "Categories": "Ficus"
    },
    {
        "id": "456",
        "Latin name": "Dracaena deremensis",
        "Family": "Liliaceae",
        "Categories": "Dracaena"
    }
]

@patch("main.requests.get")
def test_get_plants(mock_get):
    mock_response = Mock()
    mock_response.status_code = 200
    mock_response.json.return_value = mock_plants
    mock_get.return_value = mock_response

    response = client.get("/plants")
    assert response.status_code == 200
    assert response.json()[0]["latin"] == "Ficus lyrata"
    assert response.json()[1]["family"] == "Liliaceae"

@patch("main.requests.get")
def test_get_plant_details_found(mock_get):
    mock_response = Mock()
    mock_response.status_code = 200
    mock_response.json.return_value = mock_plants[0]
    mock_get.return_value = mock_response

    response = client.get("/plants/123")
    assert response.status_code == 200
    for key in mock_plants[0]:
        assert key in response.json()
        assert response.json()[key] == mock_plants[0][key]

@patch("main.requests.get")
def test_get_plant_details_not_found(mock_get):
    mock_response = Mock()
    mock_response.status_code = 200
    mock_response.json.return_value = {}
    mock_get.return_value = mock_response

    response = client.get("/plants/999")
    assert response.status_code == 404
    assert response.json()["detail"] == "Plant not found"
