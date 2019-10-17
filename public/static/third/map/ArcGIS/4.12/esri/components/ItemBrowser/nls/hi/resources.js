// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define({regions:"\u0915\u094d\u0937\u0947\u0924\u094d\u0930",header:{sectionTitles:{all:"ArcGIS Online",myContent:"\u092e\u0947\u0930\u0940 \u0938\u093e\u092e\u0917\u094d\u0930\u0940",myFavorites:"\u092e\u0947\u0930\u0947 \u092a\u0938\u0902\u0926\u0940\u0926\u093e",myGroups:"\u092e\u0947\u0930\u0947 \u0938\u092e\u0942\u0939",myOrganization:"\u092e\u0947\u0930\u093e \u0938\u0902\u0917\u0920\u0928",livingAtlas:"Living Atlas",subscription:"\u0938\u0926\u0938\u094d\u092f\u0924\u093e \u0938\u093e\u092e\u0917\u094d\u0930\u0940"},
browse:"\u092c\u094d\u0930\u093e\u0909\u091c \u0915\u0930\u0947\u0902",search:"\u0916\u094b\u091c\u0947\u0902",filterFolders:"\u092b\u093c\u094b\u0932\u094d\u0921\u0930 \u092b\u093c\u093f\u0932\u094d\u091f\u0930 \u0915\u0930\u0947\u0902",allFolders:"\u092e\u0947\u0930\u0940 \u0938\u092d\u0940 \u0938\u093e\u092e\u0917\u094d\u0930\u0940",filterGroups:"\u0938\u092e\u0942\u0939\u094b\u0902 \u0915\u094b \u092b\u093f\u0932\u094d\u091f\u0930 \u0915\u0930\u0947\u0902",allGroups:"\u092e\u0947\u0930\u0947 \u0938\u092e\u0942\u0939 \u0915\u0940 \u0938\u092d\u0940 \u0938\u093e\u092e\u0917\u094d\u0930\u0940"},
resultCount:"\u0906\u0907\u091f\u092e",searchPlaceholders:{generic:"\u0916\u094b\u091c \u0936\u092c\u094d\u0926 \u0926\u0930\u094d\u091c \u0915\u0930\u0947\u0902"},filterChips:{mapArea:"\u092e\u093e\u0928\u091a\u093f\u0924\u094d\u0930 \u0915\u094d\u0937\u0947\u0924\u094d\u0930 \u0915\u0947 \u092d\u0940\u0924\u0930",type:"\u091f\u093e\u0907\u092a \u0915\u0930\u0947\u0902",dateModified:"\u0938\u0902\u0936\u094b\u0927\u093f\u0924",dateCreated:"\u092c\u0928\u093e\u092f\u093e \u0917\u092f\u093e",access:"\u0938\u093e\u091d\u093e \u0915\u093f\u092f\u093e \u0917\u092f\u093e",
group:"\u0938\u092e\u0942\u0939",folder:"\u092b\u093c\u094b\u0932\u094d\u0921\u0930",status:"\u0938\u094d\u0925\u093f\u0924\u093f",clearAll:"\u0938\u092c \u0939\u091f\u093e\u092f\u0947\u0902",category:"\u0935\u0930\u094d\u0917",region:"\u0915\u094d\u0937\u0947\u0924\u094d\u0930",tagged:"\u091f\u0948\u0917 \u0915\u093f\u092f\u093e \u0917\u092f\u093e"},sortOptions:{sort:"\u0915\u094d\u0930\u092e\u092c\u0926\u094d\u0927 \u0915\u0930\u0947\u0902",sortBy:"\u0907\u0938\u0915\u0947 \u0905\u0928\u0941\u0938\u093e\u0930 \u0938\u093e\u092e\u0917\u094d\u0930\u0940 \u0915\u094d\u0930\u092e\u093f\u0924 \u0915\u0930\u0947\u0902:",
sortDir:"\u0926\u093f\u0936\u093e \u0915\u094d\u0930\u092e\u092c\u0926\u094d\u0927 \u0915\u0930\u0947\u0902:",relevance:"\u0909\u092a\u092f\u0941\u0915\u094d\u0924",title:"\u0936\u0940\u0930\u094d\u0937\u0915",owner:"\u0938\u094d\u0935\u093e\u092e\u0940",created:"\u0928\u093f\u0930\u094d\u092e\u093e\u0923 \u0924\u093f\u0925\u093f",modified:"\u0938\u0902\u0936\u094b\u0927\u0928 \u0924\u093f\u0925\u093f",numviews:"\u0926\u0943\u0936\u094d\u092f \u0938\u0902\u0916\u094d\u092f\u093e",avgrating:"\u0930\u0947\u091f\u093f\u0902\u0917",
ascending:{relevance:"\u0928\u094d\u092f\u0942\u0928\u0924\u092e \u0938\u0947 \u0905\u0927\u093f\u0915\u0924\u092e \u0905\u0928\u0941\u0915\u0942\u0932",title:"\u0935\u0930\u094d\u0923\u0915\u094d\u0930\u092e\u093e\u0928\u0941\u0938\u093e\u0930",owner:"\u0935\u0930\u094d\u0923\u0915\u094d\u0930\u092e\u093e\u0928\u0941\u0938\u093e\u0930",created:"\u0939\u093e\u0932-\u092b\u093f\u0932\u0939\u093e\u0932 \u092e\u0947\u0902 \u0938\u092c\u0938\u0947 \u092a\u0941\u0930\u093e\u0928\u093e",modified:"\u0939\u093e\u0932-\u092b\u093f\u0932\u0939\u093e\u0932 \u092e\u0947\u0902 \u0938\u092c\u0938\u0947 \u092a\u0941\u0930\u093e\u0928\u093e",
numviews:"\u0938\u092c\u0938\u0947 \u0915\u092e \u0938\u0947 \u0936\u0941\u0930\u0942 \u0939\u094b\u0915\u0930 \u0938\u092c\u0938\u0947 \u0905\u0927\u093f\u0915 \u0915\u0940 \u0913\u0930",avgrating:"\u0938\u092c\u0938\u0947 \u0915\u092e \u0930\u0947\u091f\u093f\u0902\u0917 \u0935\u093e\u0932\u0947 \u0938\u0947 \u0936\u0942\u0930\u0942 \u0939\u094b\u0915\u0930 \u0938\u092c\u0938\u0947 \u0905\u0927\u093f\u0915 \u0930\u0947\u091f\u093f\u0902\u0917 \u0935\u093e\u0932\u0947 \u0915\u0940 \u0913\u0930"},
descending:{relevance:"\u0905\u0927\u093f\u0915\u0924\u092e \u0938\u0947 \u0928\u094d\u092f\u0942\u0928\u0924\u092e \u0905\u0928\u0941\u0915\u0942\u0932",title:"\u0935\u093f\u092a\u0930\u0940\u0924-\u0935\u0930\u094d\u0923\u0915\u094d\u0930\u092e\u093e\u0928\u0941\u0938\u093e\u0930",owner:"\u0935\u093f\u092a\u0930\u0940\u0924-\u0935\u0930\u094d\u0923\u0915\u094d\u0930\u092e\u093e\u0928\u0941\u0938\u093e\u0930",created:"\u0938\u092c\u0938\u0947 \u0939\u093e\u0932 \u0915\u093e",modified:"\u0938\u092c\u0938\u0947 \u0939\u093e\u0932 \u0915\u093e",
numviews:"\u0938\u092c\u0938\u0947 \u0905\u0927\u093f\u0915 \u0938\u0947 \u0936\u0941\u0930\u0942 \u0939\u094b\u0915\u0930 \u0938\u092c\u0938\u0947 \u0915\u092e \u0915\u0940 \u0913\u0930",avgrating:"\u0938\u092c\u0938\u0947 \u0905\u0927\u093f\u0915 \u0930\u0947\u091f\u093f\u0902\u0917 \u0935\u093e\u0932\u0947 \u0938\u0947 \u0936\u0942\u0930\u0942 \u0939\u094b\u0915\u0930 \u0938\u092c\u0938\u0947 \u0915\u092e \u0930\u0947\u091f\u093f\u0902\u0917 \u0935\u093e\u0932\u0947 \u0915\u0940 \u0913\u0930"}},
itemDetails:{addToMap:"\u092e\u093e\u0928\u091a\u093f\u0924\u094d\u0930 \u092e\u0947\u0902 \u091c\u094b\u0921\u093c\u0947\u0902",removeFromMap:"\u092e\u093e\u0928\u091a\u093f\u0924\u094d\u0930 \u0938\u0947 \u0939\u091f\u093e\u090f\u0902",by:"\u0907\u0938\u0915\u0947 \u0926\u094d\u0935\u093e\u0930\u093e",lastModified:"\u0905\u092a\u0921\u0947\u091f \u0915\u093f\u092f\u093e",noSnippet:"\u0907\u0938 \u0906\u0907\u091f\u092e \u0915\u093e \u0938\u0902\u0915\u094d\u0937\u093f\u092a\u094d\u0924 \u0938\u093e\u0930\u093e\u0902\u0936 \u0909\u092a\u0932\u094d\u092c\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948\u0964",
details:"\u0935\u093f\u0935\u0930\u0923",termsOfUse:"\u0909\u092a\u092f\u094b\u0917 \u0915\u0940 \u0936\u0930\u094d\u0924\u0947\u0902",attribution:"\u0915\u094d\u0930\u0947\u0921\u093f\u091f (\u0930\u094b\u092a\u0923)",noTermsOfUse:"\u0906\u0907\u091f\u092e \u0915\u0940 \u0938\u093e\u092e\u0917\u094d\u0930\u0940 \u0915\u093e \u0909\u092a\u092f\u094b\u0917 \u0915\u0930\u0928\u0947 \u092a\u0930 \u0915\u094b\u0908 \u0935\u093f\u0936\u0947\u0937 \u092a\u094d\u0930\u0924\u093f\u092c\u0902\u0927 \u092f\u093e \u0938\u0940\u092e\u093e\u090f\u0901 \u0928\u0939\u0940\u0902 \u0939\u0948\u0902\u0964",
noAttribution:"\u0915\u094b\u0908 \u0938\u094d\u0935\u0940\u0915\u0943\u0924\u093f\u092f\u093e\u0901 \u0928\u0939\u0940\u0902.",noDescription:"\u0906\u0907\u091f\u092e \u0915\u093e \u092a\u0942\u0930\u094d\u0923 \u0935\u0930\u094d\u0923\u0928 \u0909\u092a\u0932\u092c\u094d\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948\u0964",views:"\u0926\u0943\u0936\u094d\u092f \u0938\u0902\u0916\u094d\u092f\u093e",created:"\u092c\u0928\u093e\u092f\u093e \u0917\u092f\u093e",sharedWith:"\u0907\u0938\u0915\u0947 \u0938\u093e\u0925 \u0938\u093e\u091d\u093e \u0915\u093f\u092f\u093e \u0917\u092f\u093e",
shared:{"public":"\u0938\u092d\u0940 (\u0938\u093e\u0930\u094d\u0935\u091c\u0928\u093f\u0915)",org:"\u0938\u0902\u0917\u0920\u0928",shared:"\u0906\u0907\u091f\u092e \u0938\u093e\u091d\u093e \u0928\u0939\u0940\u0902 \u0915\u093f\u092f\u093e \u0917\u092f\u093e \u0939\u0948\u0964","private":"\u0906\u0907\u091f\u092e \u0938\u093e\u091d\u093e \u0928\u0939\u0940\u0902 \u0915\u093f\u092f\u093e \u0917\u092f\u093e \u0939\u0948\u0964"},viewUser:"\u0909\u092a\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e \u092a\u094d\u0930\u094b\u092b\u093c\u093e\u0907\u0932 \u0926\u0947\u0916\u0947\u0902",
viewOrg:"\u0938\u0902\u0917\u0920\u0928 \u092a\u0930 \u091c\u093e\u090f\u0901",addToFavorites:"\u092a\u0938\u0902\u0926\u0940\u0926\u093e \u092e\u0947\u0902 \u091c\u094b\u0921\u093c\u0947\u0902",removeFromFavorites:"\u092a\u0938\u0902\u0926\u0940\u0926\u093e \u0938\u0947 \u0939\u091f\u093e\u090f\u0902",isFavorite:"\u092a\u0938\u0902\u0926\u0940\u0926\u093e \u092e\u0947\u0902 \u0906\u0907\u091f\u092e",notFavorite:"\u0906\u0907\u091f\u092e \u092a\u0938\u0902\u0926\u0940\u0926\u093e \u092e\u0947\u0902 \u0928\u0939\u0940\u0902 \u0939\u0948",
managedBy:"\u092a\u094d\u0930\u092c\u0902\u0927\u0915:"},results:{loadingItems:"\u0906\u0907\u091f\u092e \u0932\u094b\u0921 \u0939\u094b \u0930\u0939\u0947 \u0939\u0948\u0902..",requestError:"\u0905\u0928\u0941\u0930\u094b\u0927 \u0915\u0930\u0924\u0947 \u0938\u092e\u092f \u0915\u094b\u0908 \u0924\u094d\u0930\u0941\u091f\u093f \u0939\u0941\u0908\u0964",tooManyGroups:"\u201c\u092e\u0947\u0930\u0947 \u0938\u093e\u0930\u0947 \u0938\u092e\u0942\u0939 \u0915\u0940 \u0938\u093e\u092e\u0917\u094d\u0930\u0940\u201d \u0915\u0947 \u0932\u093f\u090f \u092c\u0939\u0941\u0924 \u0938\u093e\u0930\u0947 \u0938\u092e\u0942\u0939 \u0939\u0948\u0902\u0964 \u0938\u093e\u092e\u0917\u094d\u0930\u0940 \u0926\u093f\u0916\u093e\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u090f\u0915 \u0938\u092e\u0942\u0939 \u0915\u093e \u091a\u092f\u0928 \u0915\u0930\u0947\u0902\u0964",
noItemsFound:"\u0906\u092a\u0915\u0947 \u092e\u093e\u092a\u0926\u0902\u0921 \u092a\u0930 \u0916\u0930\u0940 \u0909\u0924\u0930\u0928\u0947 \u0935\u093e\u0932\u0940 \u0915\u094b\u0908 \u0906\u0907\u091f\u092e \u0928\u0939\u0940\u0902 \u092e\u093f\u0932\u0940\u0902\u0964 \u0914\u0930 \u0905\u0927\u093f\u0915 \u0906\u0907\u091f\u092e \u0926\u0930\u094d\u0936\u093e\u0928\u0947 \u0939\u0947\u0924\u0941 \u0915\u0941\u091b \u092b\u093f\u0932\u094d\u091f\u0930 \u0939\u091f\u093e\u0928\u0947 \u0915\u0940 \u0915\u094b\u0936\u093f\u0936 \u0915\u0930\u0947\u0902\u0964",
empty:"\u0905\u092a\u0928\u0940 \u0916\u094b\u091c \u0936\u0941\u0930\u0942 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f, \u090a\u092a\u0930 \u0915\u0941\u091b \u0936\u092c\u094d\u0926 \u0926\u0930\u094d\u091c \u0915\u0930\u0947\u0902\u0964"},search:"\u0916\u094b\u091c\u0947\u0902",close:"\u092c\u0902\u0926",filterPane:{filter:"\u092b\u093f\u0932\u094d\u091f\u0930 \u0915\u0930\u0947\u0902",filters:"\u092b\u093f\u0932\u094d\u091f\u0930\u094d\u0938",mapArea:"\u0915\u0947\u0935\u0932 \u092e\u093e\u0928\u091a\u093f\u0924\u094d\u0930 \u0915\u094d\u0937\u0947\u0924\u094d\u0930 \u0915\u0947 \u092d\u0940\u0924\u0930 \u0915\u0940 \u0938\u093e\u092e\u0917\u094d\u0930\u0940 \u0926\u093f\u0916\u093e\u090f\u0901",
orgGroups:"\u092e\u0947\u0930\u0947 \u0938\u0902\u0917\u0920\u0928 \u0915\u0947 \u0938\u092e\u0942\u0939",categories:"\u0936\u094d\u0930\u0947\u0923\u093f\u092f\u093e\u0901",groupCategories:"\u0938\u092e\u0942\u0939 \u0936\u094d\u0930\u0947\u0923\u093f\u092f\u093e\u0902"},viewDetails:"\u0906\u0907\u091f\u092e \u0935\u093f\u0935\u0930\u0923 \u0926\u0947\u0916\u0947\u0902",viewFullDetails:"\u092a\u0942\u0930\u094d\u0923 \u0906\u0907\u091f\u092e \u0915\u0947 \u0935\u093f\u0935\u0930\u0923 \u0915\u094b \u0926\u0947\u0916\u0947\u0902",
groupAddDisclaimer:"\u0906_Only showing items that can be added to the current group______________________________\u091c.",learnMore:"\u0906_Learn more_____________________\u091c",back:"\u092a\u0940\u091b\u0947 \u091c\u093e\u090f\u0901",compact:"\u0924\u093e\u0932\u093f\u0915\u093e",compactView:"\u0915\u0949\u092e\u094d\u092a\u0948\u0915\u094d\u091f \u0926\u0943\u0936\u094d\u092f",list:"\u0938\u0942\u091a\u0940",listView:"\u0938\u0942\u091a\u0940 \u0926\u0943\u0936\u094d\u092f",showing:"\u0926\u093f\u0916\u093e\u092f\u093e \u091c\u093e \u0930\u0939\u093e \u0939\u0948",
viewResults:"\u092a\u0930\u093f\u0923\u093e\u092e \u0926\u0947\u0916\u0947\u0902"});