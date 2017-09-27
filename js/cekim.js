
function mazicekim(x) {
    switch (x) {
        case 0:
            $detay = $malum + $ustun;
            return $detay;
        case 1:
            $detay = $malum + $ustun + 'ا';
            return $detay;
        case 2:
            $detay = $malum + $otre + 'وا';
            return $detay;
        case 3:
            $detay = $malum + 'َتْ';
            return $detay;
        case 4:
            $detay = $malum + 'َتَا';
            return $detay;
        case 5:
            $detay = $malum + $cezm + 'نَ';
            return $detay;
        case 6:
            $detay = $malum + $cezm + 'تَ';
            return $detay;
        case 7:
            $detay = $malum + $cezm + 'تُمَا';
            return $detay;
        case 8:
            $detay = $malum + $cezm + 'تُمْ';
            return $detay;
        case 9:
            $detay = $malum + $cezm + 'تِ';
            return $detay;
        case 10:
            $detay = $malum + $cezm + 'تُمَا';
            return $detay;
        case 11:
            $detay = $malum + $cezm + 'تُنَّ';
            return $detay;
        case 12:
            $detay = $malum + $cezm + 'تُ';
            return $detay;
        case 13:
            $detay = $malum + 'ْنَا';
            return $detay;
        case 14:
            $detay = $mechul + $ustun;
            return $detay;
        case 15:
            $detay = $mechul + $ustun + 'ا';
            return $detay;
        case 16:
            $detay = $mechul + $otre + 'وا';
            return $detay;
        case 17:
            $detay = $mechul + 'َتْ';
            return $detay;
        case 18:
            $detay = $mechul + 'َتَا';
            return $detay;
        case 19:
            $detay = $mechul + $cezm + 'نَ';
            return $detay;
        case 20:
            $detay = $mechul + $cezm + 'تَ';
            return $detay;
        case 21:
            $detay = $mechul + $cezm + 'تُمَا';
            return $detay;
        case 22:
            $detay = $mechul + $cezm + 'تُمْ';
            return $detay;
        case 23:
            $detay = $mechul + $cezm + 'تِ';
            return $detay;
        case 24:
            $detay = $mechul + $cezm + 'تُمَا';
            return $detay;
        case 25:
            $detay = $mechul + $cezm + 'تُنَّ';
            return $detay;
        case 26:
            $detay = $mechul + $cezm + 'تُ';
            return $detay;
        case 27:
            $detay = $mechul + 'ْنَا';
            return $detay;
    }
}

function muzaricekim(x, fiil) {
    switch (x) {
        case 0:
            $detay = 'ي' + fiil + $otre;
            return $detay;
        case 1:
            $detay = 'ي' + fiil + $ustun + 'انِ';
            return $detay;
        case 2:
            $detay = 'ي' + fiil + $otre + 'ونَ';
            return $detay;
        case 3:
            $detay = 'ت' + fiil + $otre;
            return $detay;
        case 4:
            $detay = 'ت' + fiil + $ustun + 'انِ';
            return $detay;
        case 5:
            $detay = 'ي' + fiil + 'ْنَ';
            return $detay;
        case 6:
            $detay = 'ت' + fiil + $otre;
            return $detay;
        case 7:
            $detay = 'ت' + fiil + $ustun + 'انِ';
            return $detay;
        case 8:
            $detay = 'ت' + fiil + $otre + 'ونَ';
            return $detay;
        case 9:
            $detay = 'ت' + fiil + $esre + 'ينَ';
            return $detay;
        case 10:
            $detay = 'ت' + fiil + $ustun + 'انِ';
            return $detay;
        case 11:
            $detay = 'ت' + fiil + 'ْنَ';
            return $detay;
        case 12:
            $detay = 'ا' + fiil + $otre;
            return $detay;
        case 13:
            $detay = 'ن' + fiil + $otre;
            return $detay;
    }
}

function mastarcekim(x){
    switch (x) {
        case 0:
            $detay = $mastar1;
            return $detay;
        case 1:
            $detay = $mastar2;
            return $detay;
        case 2:
            $detay = $mastar3;
            return $detay;
    }
}

function ismifailcekim(x){
    switch (x) {
        case 0:
            $detay = $ismifail + $ikiotre;
            return $detay;
        case 1:
            $detay = $ismifail + $ustun + 'انِ';
            return $detay;
        case 2:
            $detay = $ismifail + 'ُونَ';
            return $detay;
        case 3:
            $detay = $bir + $otre + $iki + $sedde + $ustun + 'ا' + $uc + $ikiotre;
            return $detay;
        case 4:
            $detay = $bir + $otre + $iki + $sedde + $ustun + $uc  + $ikiotre;
            return $detay;
        case 5:
            $detay = $bir + $ustun + $iki + $ustun + $uc + $ustun + 'ةٌ';
            return $detay;
        case 6:
            $detay = $ismifail + $ustun + 'ةٌ';
            return $detay;
        case 7:
            $detay = $ismifail + $ustun + 'تَانِ';
            return $detay;
        case 8:
            $detay = $ismifail  + $ustun + 'اتٌ';
            return $detay;
        case 9:
            $detay = $bir + $ustun + 'وَا' + $iki + $esre + $uc + $otre;
            return $detay;
    }
}

function ismimefulcekim(x) {
    switch (x) {
        case 0:
            $detay = $ismimeful + $ikiotre;
            return $detay;
        case 1:
            $detay = $ismimeful + $ustun + 'انِ';
            return $detay;
        case 2:
            $detay = $ismimeful + 'ُونَ';
            return $detay;
        case 3:
            $detay = 'مَ' + $bir + $ustun + 'ا' + $iki + $esre + $uc + $otre;
            return $detay;
        case 4:
            $detay = $ismimeful + $ustun + 'ةٌ';
            return $detay;
        case 5:
            $detay = $ismimeful + $ustun + 'تَانِ';
            return $detay;
        case 6:
            $detay = $ismimeful  + $ustun + 'اتٌ';
            return $detay;
    }
}

function ismimekancekim(x) {
    switch (x) {
        case 0:
            $detay = 'مَ' + $ismimekanalet + $ikiotre;
            return $detay;
        case 1:
            $detay = 'مَ' + $ismimekanalet + 'َانِ';
            return $detay;
        case 2:
            $detay = 'مَ' + $bir + 'َا' + $iki + $esre + $uc + $ikiotre;
            return $detay;
    }
}

function ismialetcekim(x) {
    switch (x) {
        case 0:
            $detay = 'مِ' + $ismimekanalet + $ikiotre;
            return $detay;
        case 1:
            $detay = 'مِ' + $ismimekanalet + 'َانِ';
            return $detay;
        case 2:
            $detay = 'مَ' + $bir + 'َا' + $iki + $esre + $uc + $ikiotre;
            return $detay;
    }
}

function masdarimerre(x) {
    switch (x) {
        case 0:
            $detay = $bir + $ustun + $iki + $cezm + $uc + 'َةً';
            return $detay;
        case 1:
            $detay = $bir + $ustun + $iki + $cezm + $uc + 'َتَانِ';
            return $detay;
        case 2:
            $detay = $bir + $ustun + $iki + $ustun + $uc + 'َاتٌ';
            return $detay;
    }
}

function masdarinevi(x) {
    switch (x) {
        case 0:
            $detay = $bir + $esre + $iki + $cezm + $uc + 'َةً';
            return $detay;
        case 1:
            $detay = $bir + $esre + $iki + $cezm + $uc + 'َتَانِ';
            return $detay;
        case 2:
            $detay = $bir + $ustun + $iki + $ustun + $uc + 'َاتٌ';
            return $detay;
    }
}

function ismitasgircekim(x) {
    switch (x) {
        case 0:
            $detay = $ismitasgir + $ikiotre;
            return $detay;
        case 1:
            $detay = $ismitasgir + 'َانِ';
            return $detay;
        case 2:
            $detay = $ismitasgir + 'ُونَ';
            return $detay;
        case 3:
            $detay = $ismitasgir + 'َةٌ';
            return $detay;
        case 4:
            $detay = $ismitasgir + 'َتَانِ';
            return $detay;
        case 5:
            $detay = $ismitasgir + 'َاتٌ';
            return $detay;
    }
}

function ismimensubcekim(x) {
    switch (x) {
        case 0:
            $detay = $mastar + 'ِيٌّ';
            return $detay;
        case 1:
            $detay = $mastar + 'ِيَّانِ';
            return $detay;
        case 2:
            $detay = $mastar + 'ِيُّونَ';
            return $detay;
        case 3:
            $detay = $mastar + 'ِيَّةٌ';
            return $detay;
        case 4:
            $detay = $mastar + 'ِيَّتَانِ';
            return $detay;
        case 5:
            $detay = $mastar + 'ِيَّاتٌ';
            return $detay;
    }
}

function mubalagaismifailcekim(x) {
    switch (x) {
        case 0:
            $detay = $mubalagaismifail + $ikiotre;
            return $detay;
        case 1:
            $detay = $mubalagaismifail + 'َانِ';
            return $detay;
        case 2:
            $detay = $mubalagaismifail + 'ُونَ';
            return $detay;
        case 3:
            $detay = $mubalagaismifail + 'َةٌ';
            return $detay;
        case 4:
            $detay = $mubalagaismifail + 'َتَانِ';
            return $detay;
        case 5:
            $detay = $mubalagaismifail + 'َاتٌ';
            return $detay;
    }
}

function ismitafdilcekim(x) {
    switch (x) {
        case 0:
            $detay = $ismitafdilmzk + $otre;
            return $detay;
        case 1:
            $detay = $ismitafdilmzk + 'َانِ';
            return $detay;
        case 2:
            $detay = $ismitafdilmzk + 'ُونَ';
            return $detay;
        case 3:
            $detay = 'اَ' + $bir + 'َا' + $iki + $esre + $uc + $otre;
            return $detay;
        case 4:
            $detay = $ismitafdilmns + 'ى';
            return $detay;
        case 5:
            $detay = $ismitafdilmns + 'يَانِ';
            return $detay;
        case 6:
            $detay = $ismitafdilmns + 'يَاتٌ';
            return $detay;
        case 7:
            $detay = $bir + $otre + $iki + $ustun + $uc + $otre;
            return $detay;
    }
}

function fiilitaaccupevvelcekim(x) {
    switch (x) {
        case 0:
            $detay = $fiilitaaccupevvel + 'هُ';
            return $detay;
        case 1:
            $detay = $fiilitaaccupevvel + 'هُمَا';
            return $detay;
        case 2:
            $detay = $fiilitaaccupevvel + 'هُمْ';
            return $detay;
        case 3:
            $detay = $fiilitaaccupevvel + 'هَا';
            return $detay;
        case 4:
            $detay = $fiilitaaccupevvel + 'هُمَا';
            return $detay;
        case 5:
            $detay = $fiilitaaccupevvel + 'هُنَّ';
            return $detay;
        case 6:
            $detay = $fiilitaaccupevvel + 'كَ';
            return $detay;
        case 7:
            $detay = $fiilitaaccupevvel + 'كُمَا';
            return $detay;
        case 8:
            $detay = $fiilitaaccupevvel + 'كُمْ';
            return $detay;
        case 9:
            $detay = $fiilitaaccupevvel + 'كِ';
            return $detay;
        case 10:
            $detay = $fiilitaaccupevvel + 'كُمَا';
            return $detay;
        case 11:
            $detay = $fiilitaaccupevvel + 'كُنَّ';
            return $detay;
        case 12:
            $detay = $fiilitaaccupevvel + 'نِي';
            return $detay;
        case 13:
            $detay = $fiilitaaccupevvel + 'نَا';
            return $detay;
    }
}

function fiilitaaccupsanicekim(x) {
    switch (x) {
        case 0:
            $detay = $fiilitaaccupsani + 'هِ';
            return $detay;
        case 1:
            $detay = $fiilitaaccupsani + 'هِمَا';
            return $detay;
        case 2:
            $detay = $fiilitaaccupsani + 'هِمْ';
            return $detay;
        case 3:
            $detay = $fiilitaaccupsani + 'هَا';
            return $detay;
        case 4:
            $detay = $fiilitaaccupsani + 'هِمَا';
            return $detay;
        case 5:
            $detay = $fiilitaaccupsani + 'هِنَّ';
            return $detay;
        case 6:
            $detay = $fiilitaaccupsani + 'كَ';
            return $detay;
        case 7:
            $detay = $fiilitaaccupsani + 'كُمَا';
            return $detay;
        case 8:
            $detay = $fiilitaaccupsani + 'كُمْ';
            return $detay;
        case 9:
            $detay = $fiilitaaccupsani + 'كِ';
            return $detay;
        case 10:
            $detay = $fiilitaaccupsani + 'كُمَا';
            return $detay;
        case 11:
            $detay = $fiilitaaccupsani + 'كُنَّ';
            return $detay;
        case 12:
            $detay = $fiilitaaccupsani + 'ي';
            return $detay;
        case 13:
            $detay = $fiilitaaccupsani + 'نَا';
            return $detay;
    }
}

