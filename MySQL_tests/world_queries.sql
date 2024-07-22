SELECT 
    COUNT(*) AS `num_cities`
FROM
    `city` AS `ci`
WHERE
    `ci`.`CountryCode` = 'USA';
    
SELECT 
    `Population`, `LifeExpectancy`
FROM
    `country`
WHERE
    `Name` = 'Argentina';
    
SELECT `Name`, `LifeExpectancy` FROM `country` WHERE `LifeExpectancy` IS NOT NULL ORDER BY `LifeExpectancy` DESC LIMIT 1;

SELECT 
    `ci`.`ID`, `ci`.`Name` AS `city`, `c`.`Name` AS `country`
FROM
    `city` AS `ci`
        JOIN
    `country` AS `c` ON `c`.`Code` = `ci`.`CountryCode`
WHERE
    `c`.`Name` = 'Spain'
        AND `c`.`Capital` = `ci`.`ID`;

SELECT 
    `cl`.`Language` AS `sea_languages`
FROM
    `countrylanguage` AS `cl`
        JOIN
    `country` AS `c` ON `c`.`Code` = `cl`.`CountryCode`
WHERE
    `c`.`Region` = 'Southeast Asia'
ORDER BY `cl`.`Language` ASC;

SELECT `Name` FROM `city` WHERE `Name` LIKE 'F%' LIMIT 25;

SELECT COUNT(*) AS `china_cities` FROM `city` AS `ci`
	JOIN `country` as `c` ON `c`.`Code` = `ci`.`CountryCode`
    WHERE `c`.`Name` = 'China';

SELECT `Name`, `Population` FROM `country` WHERE `Population` > 0 ORDER BY `Population` ASC LIMIT 1;

SELECT COUNT(`Code`) AS `num_countries` FROM `country`;

SELECT `name` AS `big_country`, `SurfaceArea` FROM `country` ORDER BY `SurfaceArea` DESC LIMIT 10;

SELECT `ci`.`Name` AS `big_in_japan`, `ci`.`Population` FROM `city` AS `ci`
	JOIN `country` AS `c` ON `c`.`Code` = `ci`.`CountryCode`
	WHERE `c`.`Name` = 'Japan'
    ORDER BY `ci`.`Population` DESC
    LIMIT 5;

SELECT `Name`, `Code`, `HeadOfState` FROM `country` WHERE `HeadOfState` = 'Elizabeth II';

SELECT `Name` AS `country`, `Population`/`SurfaceArea` AS `p2a` FROM `country` WHERE `Population`/`SurfaceArea` >= 1 ORDER BY `p2a` LIMIT 10;

SELECT DISTINCT `Language` FROM `countrylanguage`;

SELECT `Name` AS `richy_rich`, `GNP` FROM `country` ORDER BY `GNP` DESC LIMIT 10;

SELECT `c`.`Name`, COUNT(`cl`.`Language`) AS `num_lang` FROM `country` AS `c`
	JOIN `countrylanguage` AS `cl` ON `cl`.`CountryCode` = `c`.`Code`
    GROUP BY `c`.`Name`
    ORDER BY `num_lang` DESC
    LIMIT 10;
    
SELECT `c`.`Name`, SUM(`cl`.`Percentage`) AS `german_pct` FROM `country` AS `c`
	JOIN `countrylanguage` AS `cl` ON `cl`.`CountryCode` = `c`.`Code`
    WHERE `cl`.`Language` = 'German'
    GROUP BY `c`.`Name`
    HAVING SUM(`cl`.`Percentage`) > 50;
    
SELECT `Name`, `LifeExpectancy` FROM `country` WHERE `LifeExpectancy` >= 1 ORDER BY `LifeExpectancy` ASC;

SELECT `GovernmentForm`, COUNT(*) AS `count` FROM `country`
GROUP BY `GovernmentForm`
ORDER BY `count` DESC
LIMIT 3;

SELECT COUNT(*) AS `indep_countries` FROM `country` WHERE `IndepYear` IS NOT NULL;