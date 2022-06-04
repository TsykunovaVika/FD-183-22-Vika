var countries = { Georgia:'Tbilisi', Kazakhstan:'Nur-Sultan', Poland:'Warsaw' };

        
       function add() {
            var country = prompt ('Введите название страны');
            var capital = prompt ('Введите название ее столицы');
            countries[country] = capital;
            console.log (countries);
        }

        function info() {
            var country = prompt ('Введите название страны');
            if (country in countries) {
                alert (countries[country])
            } else {
                alert ('нет информации о стране')
            }
        }

        function Countries () {
            for (var k in countries)
            console.log (k + ": " + countries[k])
        }

        function trash() {
            var country = prompt ('Введите название страны');
            delete countries[country];
            console.log (countries);
            }

