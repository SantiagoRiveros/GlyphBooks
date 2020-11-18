const { conn } = require("./src/db");

conn.query(`
INSERT INTO products (title, description, author, price, img)
VALUES ('Harry Potter y la piedra filosofal', 'El día que un búho misterioso deja una carta con una invitación al Colegio Hogwarts de Magia y Hechicería, su vida da un vuelco para siempre.', 'J. K. Rowling', 1500, 'https://www.harrymedia.com/data/media/9/hp1-es-2020.jpg'),
('Harry Potter y la camara secreta', 'Descripcion', 'J. K. Rowling', 1500, 'http://2.bp.blogspot.com/_mC3p3y_gsQY/S7CdmXNyomI/AAAAAAAAAGQ/kGeZNIgSGk4/s1600/harry+potter+2.jpg'),
('Harry Potter and the secret chamber', 'Una descripcion random', 'J. K. Rowling', 1002, 'https://th.bing.com/th/id/OIP.FLI2qc5HJcWmYvuscdeY0wHaLW?pid=Api&rs=1'),
('The music of you & me', 'Una descripcion random', 'Eloise Alden', 1500, 'https://itswritenow.com/wp-content/uploads/2020/07/B07P9FHQ1N-171x258.jpg'),
('El bosque negro', 'Una descripcion random', 'Steve Hillard', 1536, 'http://arealibros.republica.com/files/2012/09/el-bosque-negro.jpg'),
('Healing energy meditation', 'Una descripcion random', 'Money Channel', 1545, 'https://th.bing.com/th/id/OIP.qCkFmdM_tsYRJZXGGWvUBAHaLG?pid=Api&w=735&h=1102&rs=1'),
('Gallows wedding', 'Una descripcion random', 'Anonimo', 1523, 'https://i.ebayimg.com/images/g/pEoAAOSwfVpYn6wG/s-l600.jpg'),
('Roman der Anthropologic', 'Una descripcion random', 'C. W. Ceram', 1550, 'https://imagecache.markt.de/a0bMXqtiNM8qUzjKpfjFhvsbjCM=/fit-in/222x320/images_classifieds/7c/80/37b5-6554-4244-81d3-4332421d4deb/large.jpg'),
('Passionate pursuit', 'Una descripcion random', 'James W. Goll', 1550, 'https://i.gr-assets.com/images/S/photo.goodreads.com/books/1426714327l/22789890.jpg'),
('A day and a life', 'Una descripcion random', 'Penelope Wilcock', 1530, 'https://4.bp.blogspot.com/-VsCn56HaLQ8/V73-HsAdLAI/AAAAAAAAKdQ/XW-ezUUR1oIwuLqviKM3EpnXF0EQ1eAbwCLcB/s1600/514brqOCxYL.SX316.jpg'),
('Animales fantasticos y donde encontrarlos', 'Una descripcion random', 'J. K. Rowling', 1340, 'http://media.biobiochile.cl/wp-content/uploads/2017/02/animales-fanasticos-nueva-portada.jpg'),
('Los ojos de la noche', 'Una descripcion random', 'Ines Garland', 1450, 'https://www.loqueleo.com/ar/uploads/2016/03/tapalosojosdelanoche.jpg'),
('En los lugares de la inocencia perdida', 'Una descripcion random', 'Jose Luis Palma', 1380, 'https://i.pinimg.com/originals/8e/cd/2d/8ecd2d01bc0307e14eb505af75075a13.jpg'),
('Diario futuro', 'Una descripcion random', 'Aura', 1270, 'http://3.bp.blogspot.com/-UXRu9v32vGM/UEC83WH6TqI/AAAAAAAABeM/8hdHdHPG04I/s1600/diaF.jpg'),
('El libro de los errores', 'Una descripcion random', 'Skip Prichard', 1460, 'https://www.planetadelibros.com.ar/usuaris/libros/fotos/282/m_libros/281012_portada_el-libro-de-los-errores_skip-prichard_201809252045.jpg'),
('El libro de la selva', 'Una descripcion random', 'Rudyard Kipling', 1320, 'https://www.planetadelibros.com.ar/usuaris/libros/fotos/214/original/portada_el-libro-de-la-selva_rudyard-kipling_201602291625.jpg'),
('Harry Potter y el caliz de fuego', 'Una descripcion random', 'J. K. Rowling', 1360, 'https://ciervomaya.files.wordpress.com/2011/07/harry.jpg'),
('He died with his eyes open', 'Una descripcion random', 'Derek Raymond', 1390, 'https://www.recreoviral.com/wp-content/uploads/2015/06/30-asombrosas-portadas-de-libros-26.jpg'),
('La vida escondida entre los libros', 'Una descripcion random', 'Stephanie Butland', 1290, 'https://www.udllibros.com/imagenes/9788417/978841730204.JPG'),
('Two', 'Una descripcion random', 'Leigh Ann Kopans', 1940, 'http://2.bp.blogspot.com/-ho2AmW0d35M/VXisfjyPTXI/AAAAAAAARhk/fmAbLid3MxQ/s1600/two-leighann-kopans-one-universe.jpg'),
('The sisters brothers', 'Una descripcion random', 'Patrick de Witt', 1270, 'https://www.recreoviral.com/wp-content/uploads/2015/06/30-asombrosas-portadas-de-libros-28.jpg'),
('High and dry', 'Una descripcion random', 'Sarah Skilton', 1840, 'https://roc21cdn-roc21.netdna-ssl.com/blog/wp-content/uploads/2014/11/portadas-libros-2014-seis.jpg'),
('Batalla de reyes', 'Una descripcion random', 'M. K. HUME', 1000, 'https://bibliobulimica.files.wordpress.com/2014/07/portada-libro.jpg'),
('Marketing extraordiario', 'Una descripcion random', 'Damian Di Pace', 1770, 'https://www.ecoeediciones.com/wp-content/uploads/2018/02/Marketing-extraordinario.jpg');

INSERT INTO "Categories" (name, "createdAt", "updatedAt")

VALUES ('Accion', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00'),

('Aventura', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00'),

('Terror', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00'),

('Novela', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00'),

('Policial', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00'),

('Espiritual', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00'),

('Comedia', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00'),

('Drama', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00'),

('Teatro', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00'),

('Deportes', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00'),

('Finanzas', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00'),

('Cocina', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00'),

('Autoayuda', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00'),

('Politica', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00'),

('Actualidad', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00'),

('Niños', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00'),

('Ciencia-ficcion', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00'),

('Tecnologia', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00'),

('Psicologia', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00'),

('Poemas', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00'),

('Musica', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00'),
('Historia', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00'),

('Otro', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00');

INSERT INTO "prod_Category" ("createdAt", "updatedAt", "productId", "CategoryId")
VALUES ('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 1, 2),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 1, 4),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 2, 2),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 2, 4),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 3, 2),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 3, 4),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 4, 4),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 4, 8),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 5, 3),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 6, 6),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 6, 13),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 7, 4),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 7, 8),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 8, 22),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 9, 6),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 9, 22),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 10, 2),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 10, 4),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 11, 4),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 11, 2),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 12, 3),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 12, 4),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 13, 4),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 13, 8),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 14, 8),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 14, 17),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 15, 6),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 15, 13),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 16, 2),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 16, 16),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 17, 2),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 17, 4),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 18, 19),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 18, 5),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 19, 2),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 19, 4),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 20, 1),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 20, 17),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 20, 4),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 21, 5),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 21, 4),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 22, 13),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 22, 19),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 23, 1),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 23, 22),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 23, 4),
('2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 24, 11);

INSERT INTO "users" ("firstName", "lastName", "password", "email", "shippingAdress", "isAdmin", "createdAt", "updatedAt")
VALUES ('Admin', 'Admin', 'adminadmin', 'admin@admin.com', 'Administracion', true, '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00'),
('Fer', 'Leiva', 'ferleiva', 'efeleiva@gmail.com', 'Chaquito', true, '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00'),
('Ona', 'Lore', 'onalore', 'onalamaskpa@hotmail.com', 'South Beach Miami', false, '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00'),
('Santi', 'LC', 'santilc', 'locanesan@gmail.com', 'Algun lugar de zona sur', false, '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00'),
('Filo', 'Riveros', 'filoriveros', 'filofiloso@yahoo.com', 'En la estratosfera', false, '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00'),
('Wachu', 'Ocando', 'wachuocando', 'wachuwachito@hotmail.com', 'Chilecito pa', false, '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00'),
('Sergio', 'Pepe', 'sergiopepe', 'pepelagarto@yahoo.com', 'Ibiza', false, '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00'),
('Dieguito', 'Armando', 'lamanodedior', 'diegoarcoiris@live.com', 'Pueblito undefined', false, '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00');


INSERT INTO "reviews" ("rating", "title", "body", "createdAt", "updatedAt", "productId", "userId")
VALUES ('2', 'Maomeno noma', 'Flojeli flojeli este autor', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 2, 2),
('5', 'Lo amo mucho', 'Enamorada del libro', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 4, 3),
('1', 'Horrible', 'Nunca mas compro aca', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 6, 5),
('1', 'VIVA EL SEXO', 'Culo teta pito', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 6, 5),
('4', 'Buenisimo, me encanta', 'Re piola el librito, comprenlo', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 4, 4),
('2', 'Bastante chotero', 'La verdad lo voy a pensar dos veces la proxima vez que use esto', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 2, 6),
('4', 'Me gusta', 'Me hace sentir bien', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 3, 7),
('5', 'Me volo la tanga', 'No puedo creer lo piola que esta este libro', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 7, 8),
('4', 'Increible', 'Mucha reflexion y misterio, lo reomiendo!', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 1, 3),
('3', 'Meh..', 'No me convencio del todo pero igual le doy 3 estrellas por lastima', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 1, 5),
('4', 'A gusto', 'Era lo que queria, el libro vino en muy buenas condiciones', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 5, 4),
('1', 'EL LIBRO LLEGO ROTO', 'PESIMO SERVICIO ME LLEGO ROTO EL LIBRO, PREPARENSE PARA CAUSAS PENALES', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 8, 6),
('3', 'Poco interesante', 'He leido muchos libros en mi vida, pero este no me llamo la atencion para nada', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 9, 7),
('4', 'Renacido', 'Siento que este libro me dio la oportunidad de amar de nuevo, todes deberian leerlo', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 10, 8);
`);
