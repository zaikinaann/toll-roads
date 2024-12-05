---
title: Скрипт создания БД
sidebar_position: 2
---

# Скрипт создания БД

```plantuml
CREATE TABLE IF NOT EXISTS "user_list" (
	"id" serial NOT NULL UNIQUE,
	"email" varchar(50) NOT NULL UNIQUE,
	"password" varchar(200) NOT NULL,
	"verification_flag" boolean DEFAULT false,
	"phone_number" varchar(16),
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "vehicle" (
	"id" serial NOT NULL UNIQUE,
	"user_id" bigint NOT NULL,
	"vehicle_category_id" bigint NOT NULL,
	"vehicle_number" varchar(50) NOT NULL,
	"non-standart_vehicle_number" boolean NOT NULL DEFAULT false,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "vehicle_category" (
	"id" serial NOT NULL UNIQUE,
	"vehicle_category_description" varchar(300),
	"image" varchar(50),
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "payment" (
	"id" serial NOT NULL UNIQUE,
	"user_id" bigint NOT NULL,
	"card_number" varchar(200) NOT NULL,
	"validity_period" varchar(200) NOT NULL,
	"cvv" varchar(200) NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "transponder" (
	"id" serial NOT NULL UNIQUE,
	"user_id" bigint NOT NULL,
	"transponder_type_id" smallint NOT NULL,
	"transponder_personal_account" bigint NOT NULL,
	"PAN" bigint NOT NULL,
	"interoperability" boolean DEFAULT true,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "transponder_type" (
	"id" serial NOT NULL UNIQUE,
	"transponder_name" varchar(50) NOT NULL,
	"company_id" smallint,
	"image" varchar(50),
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "company" (
	"id" serial NOT NULL UNIQUE,
	"company_full_name" varchar(100) NOT NULL,
	"company_short_name" varchar(50),
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "road" (
	"id" serial NOT NULL UNIQUE,
	"road_full_name" varchar(100) NOT NULL,
	"road_short_name" varchar(50),
	"company_id" smallint,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "location" (
	"id" serial NOT NULL UNIQUE,
	"road_id" bigint NOT NULL,
	"city_id" bigint,
	"location_name" varchar(50) NOT NULL,
	"description" varchar(50),
	"km_of_road" smallint,
	"latitude" numeric(10,0) NOT NULL,
	"longitude" numeric(10,0) NOT NULL,
	"pvp" boolean NOT NULL DEFAULT false,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "city" (
	"id" serial NOT NULL UNIQUE,
	"name" varchar(50) NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "from_where" (
	"id" serial NOT NULL UNIQUE,
	"start_location" bigint NOT NULL,
	"end_location" bigint NOT NULL,
	"image" varchar(50),
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "price" (
	"id" serial NOT NULL UNIQUE,
	"from_where" bigint NOT NULL,
	"reverce" boolean NOT NULL DEFAULT false,
	"vehicle_category_id" smallint NOT NULL DEFAULT '5',
	"time_range_id" smallint NOT NULL DEFAULT '1',
	"payment_type" smallint NOT NULL DEFAULT '5',
	"price" numeric(10,0) NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "time_range" (
	"id" serial NOT NULL UNIQUE,
	"start_time_range" time NOT NULL,
	"end_time_range" time NOT NULL,
	"description" varchar(50),
	PRIMARY KEY ("id")
);


ALTER TABLE "vehicle" ADD CONSTRAINT "vehicle_fk1" FOREIGN KEY ("user_id") REFERENCES "user_list"("id");
ALTER TABLE "vehicle" ADD CONSTRAINT "vehicle_fk2" FOREIGN KEY ("vehicle_category_id") REFERENCES "vehicle_category"("id");

ALTER TABLE "payment" ADD CONSTRAINT "payment_fk1" FOREIGN KEY ("user_id") REFERENCES "user_list"("id");

ALTER TABLE "transponder" ADD CONSTRAINT "transponder_fk1" FOREIGN KEY ("user_id") REFERENCES "user_list"("id");
ALTER TABLE "transponder" ADD CONSTRAINT "transponder_fk2" FOREIGN KEY ("transponder_type_id") REFERENCES "transponder_type"("id");

ALTER TABLE "transponder_type" ADD CONSTRAINT "transponder_type_fk1" FOREIGN KEY ("company_id") REFERENCES "company"("id");

ALTER TABLE "road" ADD CONSTRAINT "road_fk1" FOREIGN KEY ("company_id") REFERENCES "company"("id");

ALTER TABLE "location" ADD CONSTRAINT "location_fk1" FOREIGN KEY ("road_id") REFERENCES "road"("id");
ALTER TABLE "location" ADD CONSTRAINT "location_fk2" FOREIGN KEY ("city_id") REFERENCES "city"("id");

ALTER TABLE "from_where" ADD CONSTRAINT "from_where_fk1" FOREIGN KEY ("start_location") REFERENCES "location"("id");
ALTER TABLE "from_where" ADD CONSTRAINT "from_where_fk2" FOREIGN KEY ("end_location") REFERENCES "location"("id");

ALTER TABLE "price" ADD CONSTRAINT "price_fk1" FOREIGN KEY ("from_where") REFERENCES "from_where"("id");
ALTER TABLE "price" ADD CONSTRAINT "price_fk2" FOREIGN KEY ("vehicle_category_id") REFERENCES "vehicle_category"("id");
ALTER TABLE "price" ADD CONSTRAINT "price_fk3" FOREIGN KEY ("time_range_id") REFERENCES "time_range"("id");
ALTER TABLE "price" ADD CONSTRAINT "price_fk4" FOREIGN KEY ("payment_type") REFERENCES "transponder_type"("id");

CREATE INDEX road_id_idx ON location(road_id);
CREATE INDEX from_where_idx ON price(from_where);
```


