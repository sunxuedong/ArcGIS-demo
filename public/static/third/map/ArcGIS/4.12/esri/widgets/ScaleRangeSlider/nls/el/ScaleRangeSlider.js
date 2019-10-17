// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define({noLimit:"\u0394\u03b5\u03bd \u03c5\u03c0\u03ac\u03c1\u03c7\u03b5\u03b9 \u03cc\u03c1\u03b9\u03bf",preview:"\u03a0\u03c1\u03bf\u03b5\u03c0\u03b9\u03c3\u03ba\u03cc\u03c0\u03b7\u03c3\u03b7",currentScaleTooltip:"\u03a4\u03c1\u03ad\u03c7\u03bf\u03c5\u03c3\u03b1 \u03ba\u03bb\u03af\u03bc\u03b1\u03ba\u03b1 \u03c7\u03ac\u03c1\u03c4\u03b7 (${scaleLabel})",customScaleInputTooltip:"\u03a0\u03bb\u03b7\u03ba\u03c4\u03c1\u03bf\u03bb\u03bf\u03b3\u03ae\u03c3\u03c4\u03b5 \u03bc\u03b9\u03b1 \u03ba\u03bb\u03af\u03bc\u03b1\u03ba\u03b1.",
current:"\u03a4\u03c1\u03ad\u03c7\u03bf\u03bd",setTo:"\u039f\u03c1\u03b9\u03c3\u03bc\u03cc\u03c2 \u03c3\u03b5",selectOne:"(\u03b5\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03ad\u03bd\u03b1)",setToSelectOne:"${setTo} ${selectOne}",scaleRangeLabels:{world:"\u039a\u03cc\u03c3\u03bc\u03bf\u03c2",continent:"\u0389\u03c0\u03b5\u03b9\u03c1\u03bf\u03c2",countries:"\u03a7\u03ce\u03c1\u03b5\u03c2",country:"\u03a7\u03ce\u03c1\u03b1",states:"\u03a0\u03bf\u03bb\u03b9\u03c4\u03b5\u03af\u03b5\u03c2",state:"\u03a0\u03b5\u03c1\u03b9\u03c6\u03ad\u03c1\u03b5\u03b9\u03b1",
counties:"\u0395\u03c0\u03b1\u03c1\u03c7\u03af\u03b5\u03c2",county:"\u0395\u03c0\u03b1\u03c1\u03c7\u03af\u03b1",metropolitanArea:"\u039c\u03b7\u03c4\u03c1\u03bf\u03c0\u03bf\u03bb\u03b9\u03c4\u03b9\u03ba\u03ae \u03c0\u03b5\u03c1\u03b9\u03bf\u03c7\u03ae",cities:"\u03a0\u03cc\u03bb\u03b5\u03b9\u03c2",city:"\u03a0\u03cc\u03bb\u03b7",town:"\u039a\u03c9\u03bc\u03cc\u03c0\u03bf\u03bb\u03b7",neighborhood:"\u0393\u03b5\u03b9\u03c4\u03bf\u03bd\u03b9\u03ac",streets:"\u0394\u03c1\u03cc\u03bc\u03bf\u03b9",street:"\u039f\u03b4\u03cc\u03c2",
buildings:"\u039a\u03c4\u03af\u03c1\u03b9\u03b1",building:"\u039a\u03c4\u03af\u03c1\u03b9\u03bf",smallBuilding:"\u039c\u03b9\u03ba\u03c1\u03cc \u03ba\u03c4\u03af\u03c1\u03b9\u03bf",rooms:"\u039a\u03b1\u03bd\u03ac\u03bb\u03b9\u03b1 \u03c3\u03c5\u03bd\u03bf\u03bc\u03b9\u03bb\u03af\u03b1\u03c2",room:"\u039a\u03b1\u03bd\u03ac\u03bb\u03b9 \u03c3\u03c5\u03bd\u03bf\u03bc\u03b9\u03bb\u03af\u03b1\u03c2"},featuredScaleLabels:{current:"\u03a4\u03c1\u03ad\u03c7\u03bf\u03c5\u03c3\u03b1 \u03c0\u03c1\u03bf\u03b2\u03bf\u03bb\u03ae \u03c7\u03ac\u03c1\u03c4\u03b7 (${scaleLabel})",
world:"\u039a\u03cc\u03c3\u03bc\u03bf\u03c2 (${scaleLabel})",continent:"\u0389\u03c0\u03b5\u03b9\u03c1\u03bf\u03c2 (${scaleLabel})",countriesBig:"\u03a7\u03ce\u03c1\u03b5\u03c2 - \u039c\u03b5\u03b3\u03ac\u03bb\u03b7 (${scaleLabel})",countriesSmall:"\u03a7\u03ce\u03c1\u03b5\u03c2 - \u039c\u03b9\u03ba\u03c1\u03ae (${scaleLabel})",statesProvinces:"\u03a0\u03bf\u03bb\u03b9\u03c4\u03b5\u03af\u03b5\u03c2 / \u0395\u03c0\u03b1\u03c1\u03c7\u03af\u03b5\u03c2 (${scaleLabel})",stateProvince:"\u03a0\u03bf\u03bb\u03b9\u03c4\u03b5\u03af\u03b1 / \u0395\u03c0\u03b1\u03c1\u03c7\u03af\u03b1 (${scaleLabel})",
counties:"\u039a\u03bf\u03bc\u03b7\u03c4\u03b5\u03af\u03b5\u03c2 (${scaleLabel})",county:"\u039a\u03bf\u03bc\u03b7\u03c4\u03b5\u03af\u03b1 (${scaleLabel})",metropolitanArea:"\u039c\u03b7\u03c4\u03c1\u03bf\u03c0\u03bf\u03bb\u03b9\u03c4\u03b9\u03ba\u03ae \u03c0\u03b5\u03c1\u03b9\u03bf\u03c7\u03ae (${scaleLabel})",cities:"\u03a0\u03cc\u03bb\u03b5\u03b9\u03c2 (${scaleLabel})",city:"\u03a0\u03cc\u03bb\u03b7 (${scaleLabel})",town:"\u039a\u03c9\u03bc\u03cc\u03c0\u03bf\u03bb\u03b7 (${scaleLabel})",neighborhood:"\u0393\u03b5\u03b9\u03c4\u03bf\u03bd\u03b9\u03ac (${scaleLabel})",
streets:"\u0394\u03c1\u03cc\u03bc\u03bf\u03b9 (${scaleLabel})",street:"\u0394\u03c1\u03cc\u03bc\u03bf\u03c2 (${scaleLabel})",buildings:"\u039a\u03c4\u03af\u03c1\u03b9\u03b1 (${scaleLabel})",building:"\u039a\u03c4\u03af\u03c1\u03b9\u03bf (${scaleLabel})",smallBuilding:"\u039c\u03b9\u03ba\u03c1\u03cc \u03ba\u03c4\u03af\u03c1\u03b9\u03bf (${scaleLabel})",rooms:"\u0391\u03af\u03b8\u03bf\u03c5\u03c3\u03b5\u03c2 (${scaleLabel})",room:"\u0391\u03af\u03b8\u03bf\u03c5\u03c3\u03b1 (${scaleLabel})"}});