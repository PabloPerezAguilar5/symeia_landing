import styles from './VideoPlaceholder.module.css'

type VideoPlaceholderProps = {
  label: string
  aspectRatio?: string
  youtubeId?: string
}

const VideoPlaceholder = ({ label, aspectRatio = '16/9', youtubeId }: VideoPlaceholderProps) => {
  const ratioStyle = {
    aspectRatio,
  }

  if (youtubeId) {
    return (
      <div className={styles.wrapper} style={ratioStyle}>
        <iframe
          className={styles.iframe}
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=0&rel=0&modestbranding=1`}
          title={label}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className={styles.wrapper} style={ratioStyle}>
      <div className={styles.placeholder}>
        <div className={styles.playIcon}>
          <div className={styles.playTriangle} />
        </div>
        <span className={styles.label}>{label}</span>
      </div>
    </div>
  )
}

export default VideoPlaceholder
