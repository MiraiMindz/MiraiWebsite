import axios from 'axios';
export async function fetchGithubPublicRepos() {
  try {
    const token: string = String(process.env.API_KEY);
    console.log(token);
    const response = await axios.get('https://api.github.com/user/repos', {
      headers: {
          Authorization: `Bearer ${token}`,
      },
    });

    const repositories = await Promise.all(
    response.data.map(async (repo: any) => {
      const readmeResponse = await axios.get(
          `https://api.github.com/repos/${repo.full_name}/readme`, {
            headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/vnd.github.VERSION.raw',
            },
          }
        );

        return {
          id: repo.id,
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          readme: readmeResponse.data,
        };
      })
    );

    return {
      props: {
        repositories,
      },
    };
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return {
      repositories: []
    };
  }
}
