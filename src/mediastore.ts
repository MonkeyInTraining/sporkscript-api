/// <reference path="./globals.d.ts" />
import { DSObject } from "./dsobject.ts";
import { Image } from "./image.ts";

export class MediaStore extends DSObject {
  private constructor(id: string) {
    super(id);
  }
  public static create() {
    const ret = prompt(
      "#",
      "App.CreateMediaStore(",
    );
    if (ret) {
      return new MediaStore(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  getAlbumArt(image: Image, id: string, options?: string) {
    return prompt(
      this.id,
      `Med.GetAlbumArt(\f${(image ? image.id : null)}\f${id}\f${options}`,
    ) === "true";
  }
  getSongArt(image: Image, id: string, options?: string) {
    return prompt(
      this.id,
      `Med.GetSongArt(\f${(image ? image.id : null)}\f${id}\f${options}`,
    ) == "true";
  }
  queryAlbums(filter: string, sort?: string, options?: string) {
    prompt(this.id, `Med.QueryAlbums(\f${filter}\f${sort}\f${options}`);
  }
  queryArtists(filter: string, sort?: string, options?: string) {
    prompt(this.id, `Med.QueryArtists(\f${filter}\f${sort}\f${options}`);
  }
  queryMedia(filter: string, sort?: string, options?: string) {
    prompt(this.id, `Med.QueryMedia(\f${filter}\f${sort}\f${options}`);
  }
  setOnAlbumsResult(callback: Function) {
    prompt(this.id, `Med.SetOnAlbumsResult(\f${_Cbm(callback)}`);
    return this;
  }
  setOnArtistsResult(callback: Function) {
    prompt(this.id, `Med.SetOnArtistsResult(\f${_Cbm(callback)}`);
    return this;
  }
  setOnMediaResult(callback: Function) {
    prompt(this.id, `Med.SetOnMediaResult(\f${_Cbm(callback)}`);
    return this;
  }
}
