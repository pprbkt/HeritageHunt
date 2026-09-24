// Audio Engine disabled completely per user preference
class RoyalAudioEngine {
  public startAmbientDrone() {}
  public stopAmbientDrone() {}
  public toggleAmbientDrone(): boolean {
    return false;
  }
  public getIsPlaying(): boolean {
    return false;
  }
  public playTempleChime(_freq?: number) {}
  public playCelebrationChime() {}
}

export const royalAudio = new RoyalAudioEngine();
