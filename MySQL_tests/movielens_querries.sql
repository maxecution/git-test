SELECT 
    `title`, `release_date`
FROM
    `movies`
WHERE
    `release_date` >= '1983-01-01'
        AND `release_date` <= '1993-12-31'
ORDER BY `release_date` DESC;

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
                GROUP BY `movie_id`) AS `avg_ratings`))
ORDER BY `title`;
                
SELECT 
    `title`
FROM
    `movies`
WHERE
    `id` IN (SELECT 
            `movie_id`
        FROM
            `ratings`
        WHERE
            `user_id` IN (SELECT 
                    `id`
                FROM
                    `users`
                WHERE
                    `age` = 24 AND `gender` = 'M'
                        AND `occupation_id` = (SELECT 
                            `id`
                        FROM
                            `occupations`
                        WHERE
                            name = 'student'))
                AND `rating` = 5)
        AND `id` IN (SELECT 
            `movie_id`
        FROM
            `genres_movies`
        WHERE
            `genre_id` = (SELECT 
                    `id`
                FROM
                    `genres`
                WHERE
                    `name` = 'Sci-Fi'));
                    
SELECT DISTINCT
    `title`
FROM
    `movies`
WHERE
    `release_date` = (SELECT 
            `release_date`
        FROM
            `movies`
        GROUP BY `release_date`
        ORDER BY COUNT(*) DESC
        LIMIT 1);

SELECT `g`.`name`,
    (SELECT COUNT(*)
	FROM `movies`
	WHERE `id` IN (
			SELECT `movie_id`
			FROM `genres_movies`
			WHERE `genre_id` = `g`.`id`)) AS `movie_count`
FROM `genres` AS `g`
ORDER BY `movie_count`;