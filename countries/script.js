var Allcountries = { Georgia:'Tbilisi', Kazakhstan:'Nur-Sultan', Poland:'Warsaw' };

        
       function add() {
            var country = prompt ('Введите название страны');
            var capital = prompt ('Введите название ее столицы');
            Allcountries[country] = capital;
            console.log (countries);
        }

        function info() {
            var country = prompt ('Введите название страны');
            if (country in Allcountries) {
                alert (Allcountries[country])
            } else {
                alert ('нет информации о стране')
            }
        }

        function Countries () {
            for (var k in Allcountries)
            console.log (k + ": " + Allcountries[k])
        }

        function trash() {
            var country = prompt ('Введите название страны');
            delete Allcountries[country];
            console.log (Allcountries);
            }

