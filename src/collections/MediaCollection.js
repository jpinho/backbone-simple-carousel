import _ from 'underscore'
import { Collection } from 'backbone'
import MediaItem from 'models/MediaItem';

class MediaCollection extends Collection {
  constructor(models, options) {
    this.model = MediaItem
    this.comparator = 'order'
    this.url = '/sample/data'
    super(models, options)
  }
}

export default new MediaCollection()
