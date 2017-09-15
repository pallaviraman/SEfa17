create table se_defect(defect_title VARCHAR(255), /* title of the defect*/
                       defect_id integer not null,  /* unique number assigned to a defect */
                       update_id integer not null,  /*to maintain history of events*/
                       raised_by VARCHAR(255), /* from users*/
                       created_on date, /*defect created on*/
                       severity VARCHAR(255), /* high, medium, low based on the area of project getting affected */
                       status VARCHAR(255), /* open, assigned, closed */
                       importance VARCHAR(255), /*high, medium, low based on the time available for fix generation */
                       description VARCHAR(4000), /*link to cloud storage*/
                       assigned_to VARCHAR(255),  /* from users*/
                       project_name VARCHAR(255), /*name of the project*/
                       project_module VARCHAR(255), /*module name in the project*/
                       last_modified_on date, /*updates to the description of severity or importance get recorded */
                       last_modified_by VARCHAR(255), /* from users*/
                       CONSTRAINT PK_DEFECT PRIMARY KEY(defect_id, update_id) /*primary key constraint*/
                       );
                    
create table se_attach(defect_id integer,
                       update_id integer,
                       attachments_link VARCHAR(4000), /*link to cloud storage */
                       CONSTRAINT fk_defect FOREIGN KEY(defect_id, update_id) REFERENCES se_defect(defect_id, update_id));
                       
