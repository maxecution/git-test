SELECT `title`, `release_date` FROM `movies` WHERE `release_date` >= '1983-01-01' AND `release_date` <= '1993-12-31' ORDER BY `release_date` DESC;
SELECT * FROM `ratings`;
SELECT 
    `title`,
    (SELECT 
            AVG(`rating`)
        FROM
            `ratings`
        WHERE
            ratings.movie_id = movies.id
        GROUP BY movie_id) AS avg_rating
FROM
    `movies`
WHERE
    `id` IN (SELECT 
            `movie_id`
        FROM
            `ratings`
        GROUP BY `movie_id`
        HAVING AVG(`rating`) = (SELECT 
                MIN(`avg_rating`)
            FROM
                (SELECT 
                    AVG(`rating`) AS `avg_rating`
                FROM
                    `ratings`
                GROUP BY `movie_id`) AS `avg_ratings`)) ORDER BY `title`;
SELECT `title` 
FROM `movies` 
WHERE `id` IN (
	SELECT `movie_id` 
	FROM `genres_movies` 
	WHERE `genre_id` = (
		SELECT `id` 
		FROM `genres` 
		WHERE `name` = 'Sci-FI')
)
AND `id` IN (
	SELECT `movie_id` 
    FROM `ratings` 
    WHERE `rating` = 5);