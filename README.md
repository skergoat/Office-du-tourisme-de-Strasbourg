# office-du-tourisme-de-Strasbourg

Connexion admin : 

pseudo : mentor 
pwd : openclassrooms 


Connecter la BDD et lancer Wordpress en local :  
		
	- Dans PHPMyadmin (ou autre) créez une BDD nommee : "skergoat_wordpress"

	- Importer le fichier "P2_02_BDD.sql"

	- Renommer le fichier "P2_03_SAUVEGARDE" en "wordpress"

	- Faites pointer votre web server vers le dossier "P2_kergoat_stephane" pour que l'URL du site soit : 

									http://localhost:xxxx/wordpress

	- Si besoin, allez dans P2_kergoat_stephane > wordpress et modifiez le fichier wp-config. Pour le moment la configuration du site est celle d'un fonctionnement en local sur MAC : 

										DB_NAME : skergoat_wordpress
										DB_USER : root
										DB_PASSWORD : root  

	- Adaptez les URL à votre serveur local. Pour le moment les URL de la BDD sont : 

			https://skergoat.com/wordpress/... 

		Si vous aviez besoin de changer ces URL, allez à l'adresse :

			votre-domaine/wordpress/Search-Replace-DB-master 

		Vous parviendrez alors sur un programme vous permettant de remplacer les anciennes URL par les nouvelles. 

		Par ex : https://skergoat.com par http://votre-domaine.com

		- "dry run" permet de vérifier que le changement est bien conforme à vos attentes 

		- "livre run" permet de modifier effectivement toutes les URL de la BDD 

	- démarrez votre serveur : le site devrait s'afficher et fonctionner normalement. 


Si tel n'était pas le cas, vérifiez : 


	1) Que les permaliens du site fonctionnent  

			Allez dans Réglages > Permaliens et sauvegarder les réglages pour rétablier les liens des pages 


	2) Que les plugins d'optimisation soient désactivés en local 
		 
			Désactivez les plugins "smush" et "Autoptimize" pour que les images apparaissent normalement


	3) que ReCaptcha soit désactivé en local  

			Rendez-vous dans Contact Form > Integration et retirer les clés ReCaptcha pour eviter que le badge n'apparaisse mal sur vos pages 


A ce moment le site devrait fonctionner normalement 
