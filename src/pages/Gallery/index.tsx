import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getMedias, fetch, upload, getIsLoading } from '../../features/mediasSlice';
import { useDropzone } from 'react-dropzone';

import './index.scss';
interface IGalleryProps {
}

const Gallery: React.FunctionComponent<IGalleryProps> = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const medias = useSelector(getMedias);
  const isLoading = useSelector(getIsLoading);

  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
    acceptedFiles.forEach((file) => dispatch(upload(file)))
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop})

  React.useEffect(() => {
    dispatch(fetch())
  }, []);

  return (
    <div {...getRootProps()} className="wixar-gallery d-flex flex-column">
      <input {...getInputProps()} />
      <h1>{t('pages.gallery.title')}</h1>
      <div className="gallery-container d-flex w-100 flex-wrap">
        {
          medias.map(media => (
            <div className="media-item pointed animated-action d-flex justify-content-around flex-column align-items-center ml-2 mr-2" key={media.id}>
              {
                media.type === "image" &&
                  <>
                    <img src={media.s3_url} alt={media.name} />
                    <p className="text-center">{media.name}</p>
                  </>
              }
              {
                media.type === "video" &&
                  <>
                    <video controls src={media.s3_url} />
                    <p className="text-center">{media.name}</p>
                  </>
              }
              {
                media.type === "audio" &&
                  <>
                    <p className="text-center">{media.name}</p>
                    <audio controls src={media.s3_url} />
                  </>
              }
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Gallery;
