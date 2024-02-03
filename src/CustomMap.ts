// Tells other classes how to be able to add markers
export interface Mappable {
  location: {
    lat: number;
    long: number;
  };
  showContent(): string;
}

export class CustomMap {
  googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 2,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.long,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.showContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
