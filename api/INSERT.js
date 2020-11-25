const { conn } = require("./src/db");

conn.query(`

INSERT INTO products (title, description, author, price, img)
VALUES ('Harry Potter y la piedra filosofal', 'Harry el sucio Potter agarra una piedra y muere el malo', 'J. K. Rowling', 1500, 'https://www.harrymedia.com/data/media/9/hp1-es-2020.jpg'),
('Alice in Wonderland', 'Una falopera se pasa de linea y se pega el viaje de su vida', 'Lewis Carroll', 1430, 'http://2.bp.blogspot.com/_JXi92wDCOGk/TGF1W98DwWI/AAAAAAAABqI/jmXaiB8h0nE/s1600/Alice+book+cover2.jpg'),
('Harry Potter y la camara secreta', 'Harry el sucio Potter entra al baño y casi se lo come una serpiente', 'J. K. Rowling', 1500, 'http://2.bp.blogspot.com/_mC3p3y_gsQY/S7CdmXNyomI/AAAAAAAAAGQ/kGeZNIgSGk4/s1600/harry+potter+2.jpg'),
('Marketing extraordiario', '¿QUERES SER TU PROPIO JEFE PA? Este libro es para vos', 'Damian Di Pace', 1770, 'https://www.ecoeediciones.com/wp-content/uploads/2018/02/Marketing-extraordinario.jpg'),
('The music of you & me', 'Una novela adolescente depresiva para leer un dia lluvioso', 'Eloise Alden', 1500, 'https://itswritenow.com/wp-content/uploads/2020/07/B07P9FHQ1N-171x258.jpg'),
('El bosque negro', 'Vos entra si queres y sali si podes', 'Steve Hillard', 1536, 'http://arealibros.republica.com/files/2012/09/el-bosque-negro.jpg'),
('Rapunzel encuentra a un amigo', '¿Que clase de amigo? Yo tambien quiero', 'Disney Princesas', 1931, 'https://th.bing.com/th/id/OIP.WN6_ZKlhthjGUfCTqOSPdgHaKQ?pid=Api&rs=1'),
('El dia que se perdio la cordura', 'Todo estaba tranquilo hasta que un chino se comio un murcielago', 'Javier Castillo', 2164, 'https://ep01.epimg.net/elpais/imagenes/2018/06/18/escaparate/1529337843_719213_1529340158_sumario_normal.jpg'),
('Healing energy meditation', 'Deja de estresarte al pedo y aprende a respirar', 'Money Channel', 1545, 'https://th.bing.com/th/id/OIP.qCkFmdM_tsYRJZXGGWvUBAHaLG?pid=Api&w=735&h=1102&rs=1'),
('Gallows wedding', 'No tenemos la menor idea de que trata pero leelo y contanos', 'Anonimo', 1523, 'https://i.ebayimg.com/images/g/pEoAAOSwfVpYn6wG/s-l600.jpg'),
('Roman der Anthropologic', 'Historia aburrida sobre algo de Roma', 'C. W. Ceram', 1550, 'https://imagecache.markt.de/a0bMXqtiNM8qUzjKpfjFhvsbjCM=/fit-in/222x320/images_classifieds/7c/80/37b5-6554-4244-81d3-4332421d4deb/large.jpg'),
('Matilda', 'La famosa niña falopera que lee mucho y hace volar cosas', 'Roald Dahl', 3170, 'https://th.bing.com/th/id/OIP.IF0Y-VvNGlvNKiFHVlHkcQHaMa?pid=Api&rs=1'),
('High and dry', 'Aprende a drogarte sanamente, manija', 'Sarah Skilton', 1840, 'https://roc21cdn-roc21.netdna-ssl.com/blog/wp-content/uploads/2014/11/portadas-libros-2014-seis.jpg'),
('Passionate pursuit', 'Jebus en su maximo esplendor #SalvenLasDosVidas', 'James W. Goll', 1550, 'https://i.gr-assets.com/images/S/photo.goodreads.com/books/1426714327l/22789890.jpg'),
('A day and a life', 'Un dia en la vida, eso, ¿Esperabas algo mas?', 'Penelope Wilcock', 1530, 'https://4.bp.blogspot.com/-VsCn56HaLQ8/V73-HsAdLAI/AAAAAAAAKdQ/XW-ezUUR1oIwuLqviKM3EpnXF0EQ1eAbwCLcB/s1600/514brqOCxYL.SX316.jpg'),
('Animales fantasticos y donde encontrarlos', 'Todo el bicherio del mundo del sucio Potter', 'J. K. Rowling', 1340, 'http://media.biobiochile.cl/wp-content/uploads/2017/02/animales-fanasticos-nueva-portada.jpg'),
('Batalla de reyes', 'Sangre, muerte, y muchos hombres en cuero y traspirados. Lo que nos gusta a los machos', 'M. K. HUME', 1000, 'https://bibliobulimica.files.wordpress.com/2014/07/portada-libro.jpg'),
('En los lugares de la inocencia perdida', 'Mejor no describimos esto porque nos bajan la pagina', 'Jose Luis Palma', 1380, 'https://i.pinimg.com/originals/8e/cd/2d/8ecd2d01bc0307e14eb505af75075a13.jpg'),
('Diario futuro', 'Renacer, crecer, amar, ser... y esas cosas', 'Aura', 1270, 'http://3.bp.blogspot.com/-UXRu9v32vGM/UEC83WH6TqI/AAAAAAAABeM/8hdHdHPG04I/s1600/diaF.jpg'),
('El libro de los errores', 'Te vas a sentir muy identificad@ con esto', 'Skip Prichard', 1460, 'https://www.planetadelibros.com.ar/usuaris/libros/fotos/282/m_libros/281012_portada_el-libro-de-los-errores_skip-prichard_201809252045.jpg'),
('El libro de la selva', 'Un niño abandonado por padres neglijentes entabla una extraña relacion afectiva con un oso', 'Rudyard Kipling', 1320, 'https://www.planetadelibros.com.ar/usuaris/libros/fotos/214/original/portada_el-libro-de-la-selva_rudyard-kipling_201602291625.jpg'),
('Harry Potter y el caliz de fuego', 'Harry el sucio Potter le entra a un caliz con contenido sospechoso', 'J. K. Rowling', 1360, 'https://ciervomaya.files.wordpress.com/2011/07/harry.jpg'),
('He died with his eyes open', 'La historia de alguien que se murio con los ojos abiertos, todo muy literal', 'Derek Raymond', 1390, 'https://www.recreoviral.com/wp-content/uploads/2015/06/30-asombrosas-portadas-de-libros-26.jpg'),
('La vida escondida entre los libros', 'Libro chick para regalar a chicas tumblr o a los putitos de sus amigos', 'Stephanie Butland', 1290, 'https://www.udllibros.com/imagenes/9788417/978841730204.JPG'),
('Two', 'Copia barata de Insurgente, Los juegos del hambre, Maze runner y esos libros choteros', 'Leigh Ann Kopans', 1940, 'http://2.bp.blogspot.com/-ho2AmW0d35M/VXisfjyPTXI/AAAAAAAARhk/fmAbLid3MxQ/s1600/two-leighann-kopans-one-universe.jpg'),
('The sisters brothers', 'Thelma y Louise pero en pandemia 2020', 'Patrick de Witt', 1270, 'https://www.recreoviral.com/wp-content/uploads/2015/06/30-asombrosas-portadas-de-libros-28.jpg'),
('Los ojos de la noche', 'Del creador de los ojos del dia', 'Ines Garland', 1450, 'https://www.loqueleo.com/ar/uploads/2016/03/tapalosojosdelanoche.jpg'),
('Harry Potter and the secret chamber', 'Lo mismo que el otro pero en ingles', 'J. K. Rowling', 1002, 'https://th.bing.com/th/id/OIP.FLI2qc5HJcWmYvuscdeY0wHaLW?pid=Api&rs=1');


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
VALUES ('Admin', 'Admin', '$2b$10$gXEMhz5MUjH4i3V9y8m1oOpYnxKAJbFLR/vKxRlDywjGg2T66VsPy', 'admin@admin.com', 'Administracion', true, '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00'),
('Fer', 'Leiva', 'ferleiva', 'efeleiva@gmail.com', 'Chaquito', true, '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00'),
('Ona', 'Lore', '$2b$10$s7jvhy3hHVpLR8ltNg9SF.CG16laczC853UZYgvEx4wB6/RdXmGQC', 'onalamaskpa@hotmail.com', 'South Beach Miami', false, '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00'),
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
('4', 'Increible', 'Mucha reflexion y misterio, lo recomiendo!', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 1, 3),
('3', 'Meh..', 'No me convencio del todo pero igual le doy 3 estrellas por lastima', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 1, 5),
('4', 'A gusto', 'Era lo que queria, el libro vino en muy buenas condiciones', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 5, 4),
('1', 'EL LIBRO LLEGO ROTO', 'PESIMO SERVICIO ME LLEGO ROTO EL LIBRO, PREPARENSE PARA CAUSAS PENALES', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 8, 6),
('3', 'Poco interesante', 'He leido muchos libros en mi vida, pero este no me llamo la atencion para nada', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 9, 7),
('4', 'Renacido', 'Siento que este libro me dio la oportunidad de amar de nuevo, todes deberian leerlo', '2017-08-09 07:00:00 -7:00', '2017-08-09 08:00:00 -7:00', 10, 8);
`);
