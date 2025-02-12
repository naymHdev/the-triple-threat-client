import React from "react";
import { Trophy } from "lucide-react";

const data = [
  { rank: 1, name: "Alice Johnson", matches: 5, killPoints: 17, playerPoints: 9, totalPoints: 980, wins: 3, photo: "https://via.placeholder.com/40" },
  { rank: 2, name: "Bob Smith", matches: 5, killPoints: 17, playerPoints: 9, totalPoints: 870, wins: 3, photo: "https://via.placeholder.com/40" },
  { rank: 3, name: "Charlie Brown", matches: 5, killPoints: 17, playerPoints: 9, totalPoints: 760, wins: 3, photo: "https://via.placeholder.com/40" },
  { rank: 4, name: "Daisy Carter", matches: 5, killPoints: 17, playerPoints: 9, totalPoints: 710, wins: 3, photo: "https://via.placeholder.com/40" },
  { rank: 5, name: "Evan Davis", matches: 5, killPoints: 17, playerPoints: 9, totalPoints: 650, wins: 3, photo: "https://via.placeholder.com/40" },
];

const LeaderBoard = () => {
  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-bold text-purple-700 text-center mb-6 flex justify-center items-center gap-2">
          <Trophy className="text-yellow-400 w-8 h-8" />
          Leaderboard
          <Trophy className="text-yellow-400 w-8 h-8" />
        </h1>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="bg-purple-600 text-white">
                <th>Rank</th>
                <th>Player</th>
                <th>Matches</th>
                <th>Kill Points</th>
                <th>Player Points</th>
                <th>Total Points</th>
                <th>Wins</th>
              </tr>
            </thead>
            <tbody>
              {data.map((player) => (
                <tr key={player.rank} className="hover:bg-purple-100">
                  <td className="text-center font-semibold text-purple-700">
                    {player.rank}
                  </td>
                  <td className="flex items-center gap-4 py-2">
                    <img
                      src={player.photo}
                      alt={player.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="font-medium text-gray-800">{player.name}</span>
                  </td>
                  <td className="text-center text-gray-800">{player.matches}</td>
                  <td className="text-center text-gray-800">{player.killPoints}</td>
                  <td className="text-center text-gray-800">{player.playerPoints}</td>
                  <td className="text-center text-gray-800 font-bold">{player.totalPoints}</td>
                  <td className="text-center text-gray-800">{player.wins}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
