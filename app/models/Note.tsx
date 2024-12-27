export class Note {
  private _title: string;
  private _content: string;
  private _id?: string;
  private _date?: string;
  private _tags: string[];

  constructor(data: NoteApi) {
    this._title = data.title;
    this._content = data.content;
    this._id = data._id;
    this._tags = data.tags;
    this._date = data.updatedAt;
  }

  get title() {
    return this._title;
  }

  get tags() {
    return this._tags;
  }

  get content() {
    return this._content;
  }

  get date() {
    return this._date;
  }

  get id() {
    return this._id;
  }
}

export interface NoteApi {
  title: string;
  content: string;
  _id?: string;
  updatedAt?: string;
  tags: string[];
}
