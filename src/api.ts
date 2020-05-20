export const baseUrl = 'http://localhost:1339';

const apiUrls = {
  auth: {
    signIn: `${baseUrl}/auth/creator`
  },
  projects: {
    all: `${baseUrl}/projects`
  },
  medias: {
    all: `${baseUrl}/source-medias`,
    create: `${baseUrl}/uploads`
  },
};

export default apiUrls;