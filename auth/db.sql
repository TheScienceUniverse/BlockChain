CREATE TABLE u_tb (
	u_id INT(6) UNSIGNED AUTO_INCREMENT,
	u_rn VARCHAR(50) NOT NULL,
	u_db DATE NOT NULL,
	u_pn VARCHAR(10) NOT NULL,
	u_ea VARCHAR(30) NOT NULL,
	u_nm VARCHAR(30) NOT NULL,
	u_pw VARCHAR(30) NOT NULL,
	PRIMARY KEY (u_id, u_nm)
);
