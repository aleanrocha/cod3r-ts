class StaticChallenge {
  note: number = 1000;
  static execute() {
    const instantiatedGrade = new StaticChallenge().note
    console.log(instantiatedGrade)
  }
}

StaticChallenge.execute()
