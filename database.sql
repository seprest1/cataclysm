--database file lives here--

CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR(150),
	"password" VARCHAR(150), 
	"character" VARCHAR(150),
	"score" INT
	);
	
INSERT INTO "user"
	(username, password, character, score) 
VALUES
	('test_user', 'test123', 'character_name', 1000);
