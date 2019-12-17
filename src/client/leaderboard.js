const leaderboard = document.getElementById('leaderboard').querySelector('ul');


export default {
  updateLeaderboard(leaders) {
    while (leaderboard.firstChild) {
      leaderboard.removeChild(leaderboard.firstChild);
    }

    leaders.forEach((leader) => {
      const listItem = document.createElement('li');
      listItem.innerText = `${leader.username}: \t ${leader.score}`;
      leaderboard.appendChild(listItem);
    });
  },
};
