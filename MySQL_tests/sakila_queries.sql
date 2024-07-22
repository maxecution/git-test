SELECT `first_name`, `last_name` FROM `actor`; -- 200 rows
SELECT `last_name` FROM `actor` WHERE `first_name` = 'John'; -- 1 row
SELECT `first_name`, `last_name` FROM `actor` WHERE `last_name` = 'Neeson'; -- 2 rows
SELECT `first_name`, `last_name`, `actor_id` FROM `actor` WHERE `actor_id` % 10 = 0; -- 20 rows
SELECT `description`, `film_id` FROM `film` WHERE `film_id` = 10; -- 1 row
SELECT `title`, `rating` FROM `film` WHERE `rating` = 'R'; -- 195 rows
SELECT `title`, `rating` FROM `film` WHERE `rating` != 'R'; -- 805 rows
SELECT `title`, `length` FROM `film` ORDER BY `length` DESC LIMIT 10; -- 10 rows
SELECT `title`, `special_features` FROM `film` WHERE `special_features` LIKE '%Deleted Scenes%'; -- 503 rows
SELECT `title`, `description` FROM `film` WHERE `description` LIKE '%robot%'; -- 77 rows
SELECT `first_name`, `last_name` FROM `actor` WHERE `last_name` LIKE '%son' ORDER BY `first_name`; -- 9 rows
SELECT DISTINCT `name` FROM `language` ORDER BY `name` DESC; -- 6 rows

-- Aggregated
SELECT COUNT(*) AS `films_2006` FROM `film` WHERE `release_year` = '2006';
SELECT AVG(`length`) AS `avg_runtime`, `rating` FROM `film` GROUP BY `rating`;
SELECT `last_name`, COUNT(`last_name`) FROM `actor` GROUP BY (`last_name`) HAVING COUNT(`last_name`) = 1 ORDER BY `last_name` DESC;
SELECT `last_name`, COUNT(`last_name`) AS `num_names` FROM `actor` GROUP BY (`last_name`) HAVING COUNT(`last_name`) > 1 ORDER BY `num_names` DESC;
SELECT * FROM `city`;
SELECT COUNT(DISTINCT `city`) AS `num_cities` FROM `city`;

-- Nested
SELECT 
    `title` AS `horror_films`
FROM
    `film`
WHERE
    `film_id` IN (SELECT 
            `film_id`
        FROM
            `film_category`
        WHERE
            `category_id` = (SELECT 
                    `category_id`
                FROM
                    `category`
                WHERE
                    name = 'Horror'));
SELECT 
    `title` AS `films_with_fred`
FROM
    `film`
WHERE
    `film_id` IN (SELECT 
            `film_id`
        FROM
            `film_actor`
        WHERE
            `actor_id` = (SELECT 
                    `actor_id`
                FROM
                    `actor`
                WHERE
                    `first_name` = 'Fred'
                        AND `last_name` = 'Costner'));
SELECT 
    `title` AS `longest_films`, `length`
FROM
    `film`
WHERE
    `length` = (SELECT 
            MAX(`length`)
        FROM
            `film`);
SELECT 
    `country` AS `marys_country`
FROM
    `country`
WHERE
    `country_id` = (SELECT 
            `country_id`
        FROM
            `city`
        WHERE
            `city_id` = (SELECT 
                    `city_id`
                FROM
                    `address`
                WHERE
                    `address_id` = (SELECT 
                            `address_id`
                        FROM
                            `customer`
                        WHERE
                            `first_name` = 'Mary'
                                AND `last_name` = 'Smith')));

-- Joins
SELECT `city`, `country` FROM `city` LEFT JOIN `country` ON city.country_id = country.country_id ORDER BY country.country;