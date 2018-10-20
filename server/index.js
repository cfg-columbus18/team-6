const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();

//The sqlite database connection
let db = new sqlite3.Database('./appDatabase.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the application database.');
});

// Our mock data - Mentor Profiles - that were shoved in the database to use
// db.run("INSERT INTO Sponsor VALUES(600, 'Trish Kim', 'trish', 'Calgaray', 'Canada', 'Eastern', 'English', 'Phone', 0, 1)", function(err, result, fields) {
//  if (err) throw err
//     console.log(result);
//  });

// Allgorithm for Matching that with time could be fixed
// function matching(q1, q2, q3, language, utc, country, rankCount) {

//     function languageMatch() {
//         var map = {};
//         // sql: SELECT MentId,Language as mrLang FROM MENTOR
//         db.serialize(() => {
//             db.each(`SELECT MentID as id,
//                         Language as mrLang
//                         FROM Sponsor
//                         WHERE Mentor_Mentee_Flag = 1`, (err, row) => {
//                 if (err) {
//                 console.error(err.message);
//                 }
//                 if (row.mrLang in map) {
//                     map[row.mrLang].push(row.id);
//                 } else {
//                     map[row.mrLang] = [row.id];
//                 }
//             });
//         });
//         // map = {language: [mentor1, mentor2]};
//         if (language in map) {
//             return map.get(language);
//         } else {
//             return Array.from(Object.keys(map).map(function(key) {
//             	return map[key];
//             }));
//         }
//     }
//     var mentorList = languageMatch();

//     function Question(mrQ1, mrQ2, mrQ3) {
//         var sum = (mrQ1 - q1)+(mrQ2 - q2)+(mrQ3 - q3);
//         var offset = 9;
//         return sum + offset;
//     }

//     function TimeZone(mrUtc) {
//         var dif = Math.abs(utc - mrUtc);
//         return (dif - 12*(dif % 12));
//     }

//     function Country(mrCountry) {
//         return (country === mrCountry) ? 1 : 0;
//     }

//     function TotalScore(score) {
//         var weights = [50, 30, 20];
//         var total = 0;
//         total += score[0]/12 * weights[0];
//         //total += (11-score[1])/11 * weights[1];
//         total += score[2] * weights[2];
//         return total;
//     }

//     function generalMatch() {
//         var map = {};
//         // sql: `SELECT MentId,${q1},${q2},${q3},Utc,Country FROM MENTOR`
//         db.serialize(() => {
//             db.each(`SELECT MentID as id,
//                         ${q1},
//                         ${q2},
//                         ${q3},
//                         UTC,
//                         Country,
//                         Language
//                         FROM Sponsor
//                         WHERE Mentor_Mentee_Flag = 1`, (err, row) => {
//                 if (err) {
//                 console.error(err.message);
//                 }
//                 map[row.id] = row;
//             });
//         });
//         // map = {mentor: [mentorQ1,mentorQ2,mentorQ3,mentorUtc,mentorCountry]}
//         var result = {};
//         for (var [mr, data] of map) {
//             qScore = Question(data[0], data[1], data[2]);
//             //tzScore = TimeZone(data[3]);
//             cScore = Country(data[4]);
//             result[mr] = [qScore, null, cScore]
//         }
//         var ranking = []
//         for (var [mr, score] of result) {
//             ranking.push([mr, TotalScore(score)]);
//         }
//         ranking.sort(function(a, b) {
//             return b[1] - a[1];
//         })
//         return ranking.slice(rankCount);
//     }

//     match = generalMatch();

//     return match;
// }
//



app.get('/match/', (req, res) => {
	// Given String parameters from the HTTPrequest, these would be used in the matching algorithm
	// to find the top matches. These are provided by the mentee using the service on the front end
	var prior1 = req.query.prior1; 
	var value1 = req.query.value1; 
	var prior2 = req.query.prior2; 
	var value2 = req.query.value2; 
	var prior3 = req.query.prior3; 
	var value3 = req.query.value3; 

	var response = {
		"mentor1": {
			"Name": "Matthew Jones", 
			"Sponsor Stage": "5",
			"Language": "English",
			"Time Zone": "Eastern",
			"Country": "Canada", 
			"Experience": "Pre-Departure, Application Process, Transitioning out of sponsorship"
		},
		"mentor2": {
			"Name": "Lisa Miller", 
			"Sponsor Stage": "3",
			"Language": "English",
			"Time Zone": "Eastern",
			"Country": "Canada", 
			"Experience": "Pre-Departure, Conflict within your group, Navigating Services"
		},
		"mentor3": {
			"Name": "Jeff Warner", 
			"Sponsor Stage": "3",
			"Language": "English",
			"Time Zone": "Eastern",
			"Country": "Canada", 
			"Experience": "Emotional Support, Post-Departure, Transitioning out of sponsorship"
		},
		"mentor4": {
			"Name": "Betty Wilson", 
			"Sponsor Stage": "5",
			"Language": "English",
			"Time Zone": "Eastern",
			"Country": "Canada", 
			"Experience": "Application Process, Navigating Services, Conflict within your group"
		},
		"mentor5": {
			"Name": "Kim Smith", 
			"Sponsor Stage": "3",
			"Language": "French",
			"Time Zone": "Eastern",
			"Country": "Canada", 
			"Experience": "Managing Expecations, Post-Departure, Application Process"
		}
	}
    res.send(response);
});

app.listen(4000, () => console.log('Listening on port 4000...'));