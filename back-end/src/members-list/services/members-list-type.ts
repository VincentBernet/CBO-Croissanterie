interface calculateNombreDeletionToDoType {
    initialList: string[],
    currentList: string[],
    heureDebut: number,
    heureFin: number,
    heureActuelle: number,
  }
  
interface calculateTimeBeforeNextDeletionType {
    initialList: string[],
    heureDebut: number,
    heureFin: number,
    heureActuelle: number,
}
  
interface calculateNombreDeletionTheoricType {
    initialList: string[],
    timeDeletion: number,
    heureDebut: number,
    heureActuelle: number,
}

export { calculateNombreDeletionToDoType, calculateTimeBeforeNextDeletionType, calculateNombreDeletionTheoricType}