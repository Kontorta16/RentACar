<h4><a id="user-content-------projede-kullandığım-veritabanını-oluşturmak-için-adımlar----------sol-üstte-bulunan-view-menüsününden-sql-server-object-explorer-i-seçiniz-ya-da-türkçe-q-klavye-kullanıyorsanız-ctrl--ç-ctrl-s-ile-açabilirsiniz------açılan-menüde-sql-serverlocaldbdatabases-dizinini-açınız------databases-e-sağ-tıklayarak-add-new-database-i-seçiniz------veritabanına-istediğiniz-ismi-verebilirsiniz-ben-carrental-ismini-tercih-ediyorum------oluşturduğunuz-database-üzerine-sağ-tıklayıp-new-queryi-seçiniz-carrentaltxt-içindeki-her-şeyi-kopyalayıp-yeni-sorgu-içerisine-yapıştırınız------sorguyu-sol-üsteki-run-tuşundan-veya-ctrl--shift--e-tuş-takımı-ile-çalıştırınız------sorgu-çalıştıktan-sonra-açılan-sql-dosyasını-kapatabilirsiniz-artık-veritabanı-kullanıma-hazır-------------consoleui-ı-startup-project-olarak-seçtiğinizden-emin-olunuz-----11-hafta-güncellemesi-webapi-yi-startup-project-olarak-seçtiğinizden-emin-olunuz----7-haftadaki-dataaccess-katmanında-bulunan-abstract-kısım-generic-repository-design-pattern-ile-güncellendi----7-haftadaki-dataaccess-katmanında-bulunan-inmemorycardal-güncellendi-linq-kodları-eklenmiştir----8-hafta-ödevine-ilişkin-entityframework-kodları-yazıldı----sql-server-da-oluşturulan-veritabanı-bu-şekildedir----9-hafta-ödevine-ilişkin-core-katmanı-kodları-yazıldı----10-hafta-ödevinin-ilk-aşamasına-ilişkin-core-katmanı-kodlarına-utils-dizini-eklendi-ve-kod-refaktör-edildi----10-hafta-ödevinin-ikinci-aşamasına-ilişkin-veritabanı-düzenlendiforeign-keyler-vs-eklendi----11-hafta-ödevine-ilişkin-webapi-katmanı-kuruldu----11-haftada-business-katmanında-bulunan-validasyon-kuralları-fluentvalidation-ile-yazıldı-validationaspect-attribute-u-ile-aop-teknikleri-kullanıldı----12-hafta-ödevine-ilişkin-projeye-autofac-fluentvalidation-ve-aop-desteği-eklendi----kiralanacak-arabanın-teslim-edilmiş-olması-kuralı-fluentvalidation-ile-rentalvalidatorda-yazıldı-12-ve-13-hafta-dersi-ile-beraber-bu-kuralın-business-kuralı-olduğu-anlaşılmış-işlemler-rentalmanager-sınıfına-taşınmıştır-----13-hafta-ödevine-ilişkin-carrental-veritabanına-carimages-eklendi----13-araba-fotoğrafları-wwwroot-dizini-altında-guidler-ile-isimlendirilerek-tutuldu-bu-işlemler-webapi-katmanında-carimagescontroller-ın-add-metodunda-bulunmaktadır-----araba-fotoğraflarının-eklenmesi-silinmesi-güncellenmesi-işlemleri-veritabanında-sorunsuz-çalışmaktadır-daha-sonra-veritabanından-silinen-araba-fotoğrafının-wwwroot-dizininden-silinmesi-de-eklenebilir----14-hafta-ödevine-ilişkin-jwt-entegrasyonu-eklendi-securedoperation-attribute-u-için-metot-seçilmedi-----postman-de-yapılan-bazı-istekler------eski-i̇stekler-11hafta-ödevi--------------get-httpslocalhost44324apirentalsdetails---------get-httpslocalhost44324apiusersall---------get-httpslocalhost44324apicarsbrandid3--------get-httpslocalhost44324apicarscolorid7--------post-httpslocalhost44324apirentals---------bodyraw--json------------------------------carid-4------------customerid-1------------rentdate-2021-02-14t000000------------returndate-2021-02-19t000000------------------------yeni-i̇stekler-13hafta-ödevi------------------get-httpslocalhost44324apicarimagesphotosid1----------post-httpslocalhost44324apicarimagesadd---------form-data-------------------------------key------------value------------type--------------------------------carid------------1------------text--------------------------------file------------toyota_corollajpg------------file--------------------------hatırlatma-localhosttan-sonra-gelen-44324-port-numarası-aynı-olmayabilir-kendinizinkiyle-değiştirebilirsiniz----------------------console-da-isterlerdeki-bütün-testler-simüle-edilmiştir-dilerseniz-programcs-üzerinden-yorum-satırlarını-açarak-diğer-operasyonları-da-deneyebilirsiniz----consoleui-da-yapılacan-add-update-delete-işlemlerini-ilgili-fonksiyonlardan-güncelleyebilirsiniz---" class="anchor" aria-hidden="true" href="#------projede-kullandığım-veritabanını-oluşturmak-için-adımlar----------sol-üstte-bulunan-view-menüsününden-sql-server-object-explorer-i-seçiniz-ya-da-türkçe-q-klavye-kullanıyorsanız-ctrl--ç-ctrl-s-ile-açabilirsiniz------açılan-menüde-sql-serverlocaldbdatabases-dizinini-açınız------databases-e-sağ-tıklayarak-add-new-database-i-seçiniz------veritabanına-istediğiniz-ismi-verebilirsiniz-ben-carrental-ismini-tercih-ediyorum------oluşturduğunuz-database-üzerine-sağ-tıklayıp-new-queryi-seçiniz-carrentaltxt-içindeki-her-şeyi-kopyalayıp-yeni-sorgu-içerisine-yapıştırınız------sorguyu-sol-üsteki-run-tuşundan-veya-ctrl--shift--e-tuş-takımı-ile-çalıştırınız------sorgu-çalıştıktan-sonra-açılan-sql-dosyasını-kapatabilirsiniz-artık-veritabanı-kullanıma-hazır-------------consoleui-ı-startup-project-olarak-seçtiğinizden-emin-olunuz-----11-hafta-güncellemesi-webapi-yi-startup-project-olarak-seçtiğinizden-emin-olunuz----7-haftadaki-dataaccess-katmanında-bulunan-abstract-kısım-generic-repository-design-pattern-ile-güncellendi----7-haftadaki-dataaccess-katmanında-bulunan-inmemorycardal-güncellendi-linq-kodları-eklenmiştir----8-hafta-ödevine-ilişkin-entityframework-kodları-yazıldı----sql-server-da-oluşturulan-veritabanı-bu-şekildedir----9-hafta-ödevine-ilişkin-core-katmanı-kodları-yazıldı----10-hafta-ödevinin-ilk-aşamasına-ilişkin-core-katmanı-kodlarına-utils-dizini-eklendi-ve-kod-refaktör-edildi----10-hafta-ödevinin-ikinci-aşamasına-ilişkin-veritabanı-düzenlendiforeign-keyler-vs-eklendi----11-hafta-ödevine-ilişkin-webapi-katmanı-kuruldu----11-haftada-business-katmanında-bulunan-validasyon-kuralları-fluentvalidation-ile-yazıldı-validationaspect-attribute-u-ile-aop-teknikleri-kullanıldı----12-hafta-ödevine-ilişkin-projeye-autofac-fluentvalidation-ve-aop-desteği-eklendi----kiralanacak-arabanın-teslim-edilmiş-olması-kuralı-fluentvalidation-ile-rentalvalidatorda-yazıldı-12-ve-13-hafta-dersi-ile-beraber-bu-kuralın-business-kuralı-olduğu-anlaşılmış-işlemler-rentalmanager-sınıfına-taşınmıştır-----13-hafta-ödevine-ilişkin-carrental-veritabanına-carimages-eklendi----13-araba-fotoğrafları-wwwroot-dizini-altında-guidler-ile-isimlendirilerek-tutuldu-bu-işlemler-webapi-katmanında-carimagescontroller-ın-add-metodunda-bulunmaktadır-----araba-fotoğraflarının-eklenmesi-silinmesi-güncellenmesi-işlemleri-veritabanında-sorunsuz-çalışmaktadır-daha-sonra-veritabanından-silinen-araba-fotoğrafının-wwwroot-dizininden-silinmesi-de-eklenebilir----14-hafta-ödevine-ilişkin-jwt-entegrasyonu-eklendi-securedoperation-attribute-u-için-metot-seçilmedi-----postman-de-yapılan-bazı-istekler------eski-i̇stekler-11hafta-ödevi--------------get-httpslocalhost44324apirentalsdetails---------get-httpslocalhost44324apiusersall---------get-httpslocalhost44324apicarsbrandid3--------get-httpslocalhost44324apicarscolorid7--------post-httpslocalhost44324apirentals---------bodyraw--json------------------------------carid-4------------customerid-1------------rentdate-2021-02-14t000000------------returndate-2021-02-19t000000------------------------yeni-i̇stekler-13hafta-ödevi------------------get-httpslocalhost44324apicarimagesphotosid1----------post-httpslocalhost44324apicarimagesadd---------form-data-------------------------------key------------value------------type--------------------------------carid------------1------------text--------------------------------file------------toyota_corollajpg------------file--------------------------hatırlatma-localhosttan-sonra-gelen-44324-port-numarası-aynı-olmayabilir-kendinizinkiyle-değiştirebilirsiniz----------------------console-da-isterlerdeki-bütün-testler-simüle-edilmiştir-dilerseniz-programcs-üzerinden-yorum-satırlarını-açarak-diğer-operasyonları-da-deneyebilirsiniz----consoleui-da-yapılacan-add-update-delete-işlemlerini-ilgili-fonksiyonlardan-güncelleyebilirsiniz---"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>
  <ul>
    <li>Projede kullandığım veritabanını oluşturmak için adımlar:
    <ol>
      <li>Sol üstte bulunan View Menüsününden, SQL Server Object Explorer' i seçiniz. Ya da Türkçe Q Klavye kullanıyorsanız CTRL + ç, CTRL+ S ile açabilirsiniz.</li>
      <li>Açılan menüde SQL Server&gt;(localdb)&gt;Databases dizinini açınız.</li>
      <li>Databases' e sağ tıklayarak Add New Database' i seçiniz.</li>
      <li>Veritabanına istediğiniz ismi verebilirsiniz. Ben CarRental ismini tercih ediyorum.</li>
      <li>Oluşturduğunuz Database üzerine sağ tıklayıp New Query'i seçiniz. <a href="https://github.com/poyrazaktas/YazilimGelistiriciKampi/blob/master/CarRentalQuery.txt">CarRental.txt</a> içindeki her şeyi kopyalayıp, yeni sorgu içerisine yapıştırınız.</li>
      <li>Sorguyu sol üsteki run tuşundan veya CTRL + SHIFT + E tuş takımı ile çalıştırınız.</li>
      <li>Sorgu çalıştıktan sonra açılan .sql dosyasını kapatabilirsiniz. Artık veritabanı kullanıma hazır.</li>
    </ol>
    </li>
    <li> <del>ConsoleUI' ı startup project olarak seçtiğinizden emin olunuz.</del> </li>
    <li>11. Hafta Güncellemesi: WebAPI' yi startup project olarak seçtiğinizden emin olunuz.</li>
    <li>7. Haftadaki DataAccess katmanında bulunan Abstract kısım Generic Repository Design Pattern ile güncellendi.</li>
    <li>7. Haftadaki DataAccess katmanında bulunan InMemoryCarDal güncellendi. (LINQ kodları eklenmiştir.)</li>
    <li>8. Hafta ödevine ilişkin EntityFramework kodları yazıldı.</li>
    <li><del>Sql Server' da oluşturulan veritabanı <a href="https://hizliresim.com/hL9kKp" rel="nofollow">bu</a> şekildedir.</del></li>
    <li>9. Hafta ödevine ilişkin Core Katmanı kodları yazıldı.</li>
    <li>10. Hafta ödevinin ilk aşamasına ilişkin Core Katmanı kodlarına Utils dizini eklendi ve kod refaktör edildi.</li>
    <li>10. Hafta ödevinin ikinci aşamasına ilişkin veritabanı düzenlendi(foreign keyler vs. eklendi).</li>
    <li>11. Hafta ödevine ilişkin WebAPI katmanı kuruldu.</li>
    <li>11. Haftada Business katmanında bulunan Validasyon kuralları FluentValidation ile yazıldı. ValidationAspect Attribute' u ile AOP teknikleri kullanıldı.</li>
    <li>12. Hafta ödevine ilişkin projeye Autofac, FluentValidation ve AOP Desteği eklendi.</li>
    <li>Kiralanacak arabanın, teslim edilmiş olması kuralı <del>FluentValidation ile <a href="https://github.com/poyrazaktas/YazilimGelistiriciKampi/blob/master/CarRentalProject/Business/ValidationRules/FluentValidation/RentalValidator.cs">RentalValidator</a>'da yazıldı.</del> 12. ve 13. Hafta Dersi ile beraber bu kuralın Business Kuralı olduğu anlaşılmış işlemler <a href="https://github.com/poyrazaktas/YazilimGelistiriciKampi/blob/master/CarRentalProject/Business/Concrete/RentalManager.cs">RentalManager</a> sınıfına taşınmıştır. </li>
    <li>13. Hafta ödevine ilişkin CarRental veritabanına CarImages eklendi.</li>
    <li>13. Araba fotoğrafları wwwroot dizini altında, GUID'ler ile isimlendirilerek tutuldu. Bu işlemler WebAPI katmanında CarImagesController' ın Add Metodunda bulunmaktadır. </li>
    <li>Araba fotoğraflarının eklenmesi, silinmesi, güncellenmesi işlemleri veritabanında sorunsuz çalışmaktadır. Daha sonra veritabanından silinen araba fotoğrafının wwwroot dizininden silinmesi de eklenebilir.</li>
    <li>14. Hafta ödevine ilişkin JWT entegrasyonu eklendi. SecuredOperation Attribute' u için metot seçilmedi.</li>
    <li> Postman de yapılan bazı istekler:
      <h2><a id="user-content-eski-i̇stekler-11hafta-ödevi" class="anchor" aria-hidden="true" href="#eski-i̇stekler-11hafta-ödevi"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a><b>Eski İstekler</b> 11.Hafta Ödevi</h2>
      <ul>
        <li>GET: https://localhost:44324/api/rentals/details </li>
        <li>GET: https://localhost:44324/api/users/all </li>
        <li>GET: https://localhost:44324/api/cars/brand?id=3</li>
        <li>GET: https://localhost:44324/api/cars/color?id=7</li>
        <li>POST: https://localhost:44324/api/rentals<br> 
        BODY(raw -JSON): 
        <pre> 
        {
            "carId": 4,
            "customerId": 1,
            "rentDate": "2021-02-14T00:00:00",
            "returnDate": "2021-02-19T00:00:00"
        }
        </pre>
        <h2><a id="user-content-yeni-i̇stekler-13hafta-ödevi" class="anchor" aria-hidden="true" href="#yeni-i̇stekler-13hafta-ödevi"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a><b>Yeni İstekler</b> 13.Hafta Ödevi</h2>
        <ul>
          <li>GET: https://localhost:44324/api/carimages/photos?id=1</li>
          <li>POST: https://localhost:44324/api/carimages/add<br> 
        <h3><a id="user-content-form-data" class="anchor" aria-hidden="true" href="#form-data"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a><b>form-data:</b></h3> 
        <table>
          <tbody><tr>
            <th>Key</th>
            <th>Value</th>
            <th>Type</th>
          </tr>
          <tr>
            <td>carId</td>
            <td>1</td>
            <td>Text</td>
          </tr>
          <tr>
            <td>File</td>
            <td>toyota_corolla.jpg</td>
            <td>File</td>
          </tr>
        </tbody></table>
        <b>Hatırlatma:</b> localhost'tan sonra gelen 44324 port numarası aynı olmayabilir, kendinizinkiyle değiştirebilirsiniz.
        </li>
      </ul>
    </li>
    <li><del>Console' da isterlerdeki bütün testler simüle edilmiştir. Dilerseniz <a href="https://github.com/poyrazaktas/YazilimGelistiriciKampi/blob/master/CarRentalProject/ConsoleUI/Program.cs">Program.cs</a> üzerinden, yorum satırlarını açarak diğer operasyonları da deneyebilirsiniz.</del></li>
    <li><del>ConsoleUI' da yapılacan Add, Update, Delete işlemlerini ilgili fonksiyonlardan güncelleyebilirsiniz. </del></li>
  </ul>
</li></ul></h4>
