CREATE TABLE IF NOT EXISTS scenes
(
    id   SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS phrases
(
    id                   SERIAL PRIMARY KEY,
    scene_id             INT,
    phrase               TEXT,
    japanese_translation TEXT,
    created_at           TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at           TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (scene_id) REFERENCES scenes (id)
);

CREATE TABLE IF NOT EXISTS tags
(
    id  SERIAL PRIMARY KEY,
    tag VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS phrase_tags
(
    phrase_id INT NOT NULL,
    tag_id    INT NOT NULL,
    FOREIGN KEY (phrase_id) REFERENCES phrases (id),
    FOREIGN KEY (tag_id) REFERENCES tags (id),
    PRIMARY KEY (phrase_id, tag_id)
);

INSERT INTO scenes (name)
VALUES ('Restaurant'),
       ('Airport'),
       ('Hotel'),
       ('Business Meeting'),
       ('Taxi'),
       ('Shopping'),
       ('Doctor''s Office'),
       ('Phone Call'),
       ('Coffee Shop'),
       ('Library');

INSERT INTO tags (tag)
VALUES ('food'),
       ('request'),
       ('travel'),
       ('directions'),
       ('accommodation'),
       ('check-in'),
       ('work'),
       ('meeting'),
       ('transport'),
       ('shopping'),
       ('health'),
       ('appointment'),
       ('communication'),
       ('education'),
       ('order'),
       ('question');

INSERT INTO phrases (scene_id, phrase, japanese_translation)
VALUES (1, 'Could I have the menu, please?', 'メニューをいただけますか？'),
       (2, 'Where is the departure gate?', '出発ゲートはどこですか？'),
       (3, 'I''d like to check in.', 'チェックインをお願いします。'),
       (4, 'Shall we begin the meeting?', '会議を始めましょうか？'),
       (5, 'Please take me to this address.', 'この住所までお願いします。'),
       (6, 'How much is this?', 'これはいくらですか？'),
       (7, 'I have an appointment at 2 PM.', '午後2時に予約があります。'),
       (8, 'Can I call you back later?', '後でお電話してもよろしいですか？'),
       (9, 'I''ll have a latte, please.', 'ラテを一つお願いします。'),
       (10, 'Where can I find books on history?', '歴史に関する本はどこにありますか？');

-- phrase_tags の関連付け
-- 各フレーズに対して、適切なタグを関連付ける。例えば:
INSERT INTO phrase_tags (phrase_id, tag_id)
VALUES (1, 1),
       (1, 2),
       (2, 3),
       (2, 4),
       (3, 5),
       (3, 6),
       (4, 7),
       (4, 8),
       (5, 9),
       (5, 4),
       (6, 10),
       (6, 15),
       (7, 11),
       (7, 12),
       (8, 13),
       (9, 1),
       (9, 15),
       (10, 14),
       (10, 16);

