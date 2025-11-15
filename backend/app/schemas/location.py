from pydantic import BaseModel


class Location(BaseModel):
    latitude: float
    longitude: float
    address: str | None = None
    city: str | None = None
    country: str | None = None
    postal_code: str | None = None
