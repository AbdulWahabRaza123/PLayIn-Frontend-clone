const bets = [
	{
	  user: 'Sean',
	  teams: ['Patriots', 'Bucs'],
	  selectedTeam: "Bucs",
	  player: 'Tom Brady',
	  event: 'will have 0 passing touchdowns',
	  timeframe: 'by the end of the first quarter',
	  comment: 'Bucs are going to get trashed by the Pats!',
	  wager: 100,
	  win: 110,
	},
	{
	  user: 'Sean',
	  teams: ['Minnesota', 'Montreal'],
	  selectedTeam: "Minnesota",
	  player: 'Minnesota',
	  event: 'will Win the match',
	  timeframe: '',
	  comment: 'They are totally in for the finals',
	  wager: 1500,
	  win: 1750,
	},
	{
	  user: 'Enyu',
	  teams: ['PlayIn', 'Sports'],
	  player: 'PlayIn',
	  event: 'takes over the sports betting industry',
	  timeframe: '',
	  comment: 'They have no idea what is about to happen to them!',
	  wager: 1100,
	  win: 10,
	},
	{
	  user: 'DavidCummings',
	  teams: ['PlayIn', 'DraftKings'],
	  player: 'PlayIn',
	  event: 'takes over the sports betting industry',
	  timeframe: '',
	  comment: 'DraftKings... more like DraftQueens!',
	  wager: 100000,
	  win: 1000000,
	},
  ]

interface IBet {
	user: string
	teams: Array<string>
	selectedTeam: string
	player: string
	event: string
	timeframe: string
	comment: string
	wager: number
	win: number
}

export default bets as Array<IBet>
export {type IBet}