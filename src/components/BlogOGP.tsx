import config from "../../typewriter.config";

interface OgpProps {
  title: string;
  dateString?: string;
  author?: string;
  avatar?: string;
  thumbnail?: string;
}

export const BlogOgpTemplate = ({
  title,
  dateString,
  author = config.author.name,
  avatar = config.author.avatar,
  thumbnail
}: OgpProps) => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fbfbfb',
        border: '20px solid #1a1a1a',
        boxSizing: 'border-box',
        padding: thumbnail ? '0 0 0 80px' : '60px 80px',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          width: thumbnail ? '53%' : '100%',
          padding: thumbnail ? '60px 0' : '0',
        }}
      >
        <div
          style={{
            fontSize: '22px',
            color: '#1a1a1a',
            opacity: 0.6,
            fontWeight: 500,
          }}
        >
          {dateString ? dateString : ''}
        </div>

        <div
          style={{
            fontSize: '52px',
            fontWeight: 'bold',
            color: '#1a1a1a',
            lineHeight: 1.4,
            margin: '40px 0',
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          {avatar && (
            <img
              src={avatar}
              alt="author avatar"
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
          )}
          <div
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#1a1a1a',
            }}
          >
            {author}
          </div>
        </div>
      </div>

      {thumbnail && (
        <div
          style={{
            display: 'flex',
            width: '40%',
            height: '100%',
          }}
        >
          <img
            src={thumbnail}
            alt="thumbnail"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.95,
            }}
          />
        </div>
      )}
    </div>
  );
};
