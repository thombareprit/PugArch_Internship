# SQL

### Basic Commands

```sql
-- List all databases 
SHOW DATABASES; 

-- Switch to a database 
USE db_name; 

-- List tables in current database 
SHOW TABLES; 

-- Show structure of a table 
DESCRIBE table_name; 

-- View first 10 rows 
SELECT * FROM table LIMIT 10;
```

### SELECT Queries

```sql
SELECT col1, col2 FROM table; -- Select specific columns 
WHERE condition -- Filter rows 
ORDER BY col ASC/DESC -- Sort rows
```

### Filtering

```sql
---
DISTINCT -- Remove duplicates 
BETWEEN val1 AND val2 -- Range filter 
LIKE 'A%' -- Pattern match (starts with A) 
IN (val1, val2, ...) -- Match from list 
LIMIT 5 OFFSET 10 -- Skip 10, get 5 rows 
---
```

### Aggregation

```sql
-- Aggregate calculations 
COUNT(col), SUM(col), AVG(col) 

-- Group data 
GROUP BY col 

-- Filter after grouping 
HAVING condition
```

### Joins

```sql
INNER JOIN -- Match rows from both tables 
LEFT JOIN / RIGHT JOIN -- Include unmatched rows 
CROSS JOIN -- All combinations 
AS alias_name -- Rename column/table temporarily
```

### Subqueries & CTE

```sql
---
SELECT ... WHERE col IN (SELECT ...); -- Subquery 
WITH temp AS (SELECT ...) -- CTE (Common Table Expression) 
---
```

### Data Modification

```sql
-- 

INSERT INTO table (...) VALUES (...); -- Add new row 
UPDATE table SET col = val WHERE ...; -- Modify data 
DELETE FROM table WHERE ...; -- Delete rows 

---
```

### Transactions

```sql
---
START TRANSACTION; -- Begin safe 
BLOCK COMMIT; -- Save all changes 
ROLLBACK; -- Undo changes if error 
---
```

### Alter Table

```sql
---
ALTER TABLE table ADD column type; -- Add column 
ALTER TABLE table DROP column; -- Remove column 
ALTER TABLE table MODIFY column type; -- Modify column 
---
```

### Indexes

```sql
---
CREATE INDEX idx_name ON table(col); -- Improve query speed 
DROP INDEX idx_name; -- Remove index 
---
```

### Views

```sql
CREATE VIEW view_name AS SELECT ...;    -- Save a query
DROP VIEW view_name;                    -- Delete the view
```

### Permissions

```sql
GRANT SELECT ON db.table TO 'user'@'host'; -- Give permission 
REVOKE INSERT ON db.table FROM 'user'@'host'; -- Remove permission
```

