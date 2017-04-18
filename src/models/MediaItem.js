import { Model } from 'backbone'

class MediaItem extends Model {
  defaults() {
    return {
      title: '',
      images: []
    }
  }
}

export default MediaItem
