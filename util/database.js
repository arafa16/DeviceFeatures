import * as SQLite from "expo-sqlite";

const database = SQLite.openDatabaseSync("places.db");

export function init() {
  return new Promise((resolve, reject) => {
    database.isInTransactionAsync(async (tx) => {
      tx.execAsync(
        `CREATE TABLE IF NOT EXISTS places (
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          imageUri TEXT NOT NULL,
          address TEXT NOT NULL,
          lat REAL NOT NULL,
          lng REAL NOT NULL
        )`,
        [],
        () => {
          // Success callback
          resolve(true);
        },
        (_, error) => {
          // Error callback
          console.log("DB init error:", error);
          reject(error);
        }
      );
    });
  });
}

export function insertPlace(place) {
  
  const promise = new Promise((resolve, reject) => {
    
    database.isInTransactionAsync(async (tx) => {
      console.log(place, 'place')
      tx.execAsync(
        `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
        [
          place.title,
          place.imageUri,
          place.address,
          place.location.lat,
          place.location.lng,
        ],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}