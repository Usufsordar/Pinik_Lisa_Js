module.exports = {
	config: {
		name: "goiadmin",
		author: "𝗔𝗺𝗶𝗻𝘂𝗹 𝗦𝗼𝗿𝗱𝗮𝗿",
		role: 0,
		shortDescription: " ",
		longDescription: "",
		category: "BOT",
		guide: "{pn}"
	},

onChat: function({ api, event }) {
	if (event.senderID !== "100071880593545") {
		var aid = ["100071880593545"];
		for (const id of aid) {
		if ( Object.keys(event.mentions) == id) {
			var msg = ["বস, আমিনুল সিংগেল পোলা তাকে একটা গফ দেও", "আমার বস আমিনুলকে আর একবার মেনশন দিলে তোমার নাকের মধ্যে ঘুষি মারমু😡", "বস আমিনুলকে আর একবার মেনশন দিলে খবর আছে তোমার, তোমাকে কিন্তু ঘুষি মারমু আমিনুলকে মেনশন দিবা না😠","বস আমিনুলকে এখন অনেক বিজি তাকে মেনশন দিয়ে ডিস্টার্ব কইরো না 🥰😍😏"," বস, আমিনুলকে এখন অনেক বিজি তাকে মেনশন দিবা না😡😡😡"];
			return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
		}
		}}
},
onStart: async function({}) {
	}
};
