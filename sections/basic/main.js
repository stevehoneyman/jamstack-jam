// set user ID and userName variables
const userID = "Steve Honeyman";
const userName = document.getElementById('user');
// add userName to document
userName.textContent = userID;

// get data from GitHub
// set function called listRepos
const listRepos = async username => {
  // get and store repos for user in variable called repos
  const repos = await fetch(
    `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
  ).then(res => res.json());

  const content = document.getElementById('content');
  // map over each item, store in variable called markup, output as list
  const markup = repos.map(
    repo => `
    <li>
      <a href="${repo.html_url}">${repo.name}</a>
      (⭐️ ${repo.stargazers_count})
    </li>
  `
  );

  // join username and star count into a single string
  content.innerHTML = `<ul>${markup.join('')}</ul>`;
};

// call function
listRepos('stevehoneyman');
