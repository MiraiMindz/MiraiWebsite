import 'dotenv/config';

export async function fetchGithubPublicRepos() {
  const token: string | undefined = process.env.API_KEY;
  if (token != undefined) {
    console.log(token);
    let repoData;
    const apiUrl = 'https://api.github.com/users/miraimindz/repos';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log('This is your data', data);
        repoData = data;
      });

      console.log("repoData", repoData);
  }
}
