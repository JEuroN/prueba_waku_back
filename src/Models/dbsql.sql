
CREATE TABLE public.cat_post (
                post_id VARCHAR NOT NULL,
                post_category VARCHAR(40),
                post_breed VARCHAR(40),
                post_origin VARCHAR(40),
                post_url VARCHAR NOT NULL,
                CONSTRAINT post_id PRIMARY KEY (post_id)
);


CREATE TABLE public.user_account (
                google_id VARCHAR(100) NOT NULL,
                name VARCHAR(20) NOT NULL,
                email VARCHAR(50) NOT NULL,
                given_name VARCHAR(20) NOT NULL,
                family_name VARCHAR(20) NOT NULL,
                image_url VARCHAR(300) NOT NULL,
                CONSTRAINT user_id PRIMARY KEY (google_id)
);