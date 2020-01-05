/* eslint-disable quotes, max-len, @typescript-eslint/quotes */
const knowkeys: any = [
  "root",
  "root,dictionaryData",
  "root,dictionaryData,!number",
  "root,dictionaryData,!number,entries",
  "root,dictionaryData,!number,entries,!number",
  "root,dictionaryData,!number,entries,!number,headword",
  "root,dictionaryData,!number,entries,!number,headwordMatchesUserQuery",
  "root,dictionaryData,!number,entries,!number,homographIndex",
  "root,dictionaryData,!number,entries,!number,labelSet",
  "root,dictionaryData,!number,entries,!number,labelSet,registers",
  "root,dictionaryData,!number,entries,!number,labelSet,registers,!number",
  "root,dictionaryData,!number,entries,!number,labelSet,geographics",
  "root,dictionaryData,!number,entries,!number,labelSet,geographics,!number",
  "root,dictionaryData,!number,entries,!number,labelSet,subjects",
  "root,dictionaryData,!number,entries,!number,labelSet,subjects,!number",
  "root,dictionaryData,!number,entries,!number,locale",
  "root,dictionaryData,!number,entries,!number,note",
  "root,dictionaryData,!number,entries,!number,note,text",
  "root,dictionaryData,!number,entries,!number,note,type",
  "root,dictionaryData,!number,entries,!number,syllabifiedHeadword",

  "root,dictionaryData,!number,entries,!number,entrySeqNo",
  "root,dictionaryData,!number,entries,!number,etymology",
  "root,dictionaryData,!number,entries,!number,etymology,etymology",
  "root,dictionaryData,!number,entries,!number,etymology,etymology,fragments",
  "root,dictionaryData,!number,entries,!number,etymology,etymology,fragments,!number",
  "root,dictionaryData,!number,entries,!number,etymology,etymology,fragments,!number,isEntryLink",
  "root,dictionaryData,!number,entries,!number,etymology,etymology,fragments,!number,text",
  "root,dictionaryData,!number,entries,!number,etymology,etymology,text",
  "root,dictionaryData,!number,entries,!number,etymology,images",
  "root,dictionaryData,!number,entries,!number,etymology,images,desktop",
  "root,dictionaryData,!number,entries,!number,etymology,images,desktop,width",
  "root,dictionaryData,!number,entries,!number,etymology,images,desktop,height",
  "root,dictionaryData,!number,entries,!number,etymology,images,desktop,url",
  "root,dictionaryData,!number,entries,!number,etymology,images,mobile",
  "root,dictionaryData,!number,entries,!number,etymology,images,mobile,width",
  "root,dictionaryData,!number,entries,!number,etymology,images,mobile,height",
  "root,dictionaryData,!number,entries,!number,etymology,images,mobile,url",
  "root,dictionaryData,!number,entries,!number,etymology,images,tablet",
  "root,dictionaryData,!number,entries,!number,etymology,images,tablet,width",
  "root,dictionaryData,!number,entries,!number,etymology,images,tablet,height",
  "root,dictionaryData,!number,entries,!number,etymology,images,tablet,url",
  "root,dictionaryData,!number,entries,!number,phonetics",
  "root,dictionaryData,!number,entries,!number,phonetics,!number",
  "root,dictionaryData,!number,entries,!number,phonetics,!number,text",
  "root,dictionaryData,!number,entries,!number,phonetics,!number,type",
  "root,dictionaryData,!number,entries,!number,phonetics,!number,oxfordAudio",
  "root,dictionaryData,!number,entries,!number,referenceId",
  "root,dictionaryData,!number,entries,!number,referencedTargets",
  "root,dictionaryData,!number,entries,!number,referencedTargets,!number",
  "root,dictionaryData,!number,entries,!number,referencedTargets,!number,id",

  "root,dictionaryData,!number,entries,!number,senseFamilies",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,labelSet",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,labelSet,registers",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,labelSet,registers,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,labelSet,geographics",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,labelSet,geographics,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,labelSet,subjects",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,labelSet,subjects,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,partsOfSpeechs",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,partsOfSpeechs,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,partsOfSpeechs,!number,value",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,morphUnits",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,morphUnits,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,morphUnits,!number,wordForm",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,morphUnits,!number,formType",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,morphUnits,!number,formType,posTag",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,morphUnits,!number,formType,description",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,note",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,note,text",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,note,type",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,partsOfSpeechs,!number,qualifier",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,phonetics",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,phonetics,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,phonetics,!number,text",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,phonetics,!number,type",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,phonetics,!number,oxfordAudio",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,definition",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,definition,fragments",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,definition,fragments,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,definition,fragments,!number,text",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,definition,fragments,!number,isEntryLink",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,definition,text",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,conciseDefinition",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,semanticClasses",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,semanticClasses,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,domainClasses",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,domainClasses,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,etymology",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,etymology,etymology",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,etymology,etymology,fragments",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,etymology,etymology,fragments,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,etymology,etymology,fragments,!number,text",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,etymology,etymology,fragments,!number,isEntryLink",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,etymology,etymology,text",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,labelSet",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,labelSet,geographics",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,labelSet,geographics,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,labelSet,registers",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,labelSet,registers,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,labelSet,subjects",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,labelSet,subjects,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,note",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,note,text",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,note,type",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,thesaurusEntries",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,thesaurusEntries,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,thesaurusEntries,!number,headword",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,thesaurusEntries,!number,antonyms",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,thesaurusEntries,!number,antonyms,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,thesaurusEntries,!number,antonyms,!number,nyms",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,thesaurusEntries,!number,antonyms,!number,nyms,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,thesaurusEntries,!number,antonyms,!number,nyms,!number,nym",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,thesaurusEntries,!number,antonyms,!number,nyms,!number,numEntries",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,thesaurusEntries,!number,antonyms,!number,register",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,thesaurusEntries,!number,synonyms",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,thesaurusEntries,!number,synonyms,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,thesaurusEntries,!number,synonyms,!number,nyms",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,thesaurusEntries,!number,synonyms,!number,nyms,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,thesaurusEntries,!number,synonyms,!number,nyms,!number,nym",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,thesaurusEntries,!number,synonyms,!number,nyms,!number,numEntries",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,thesaurusEntries,!number,synonyms,!number,nyms,!number,isCore",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,thesaurusEntries,!number,synonyms,!number,register",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,thesaurusEntries,!number,examples",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,thesaurusEntries,!number,examples,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,conciseDefinition",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,definition",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,definition,fragments",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,definition,fragments,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,definition,fragments,!number,text",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,definition,fragments,!number,isEntryLink",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,definition,text",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,domainClasses",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,domainClasses,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,etymology",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,etymology,etymology",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,etymology,etymology,fragments",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,etymology,etymology,fragments,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,etymology,etymology,fragments,!number,text",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,etymology,etymology,fragments,!number,isEntryLink",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,etymology,etymology,text",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,exampleGroups",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,exampleGroups,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,exampleGroups,!number,examples",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,exampleGroups,!number,examples,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,exampleGroups,!number,registers",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,exampleGroups,!number,registers,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,labelSet",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,labelSet,geographics",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,labelSet,geographics,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,labelSet,registers",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,labelSet,registers,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,labelSet,subjects",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,labelSet,subjects,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,morphUnits",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,morphUnits,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,morphUnits,!number,wordForm",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,morphUnits,!number,formType",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,morphUnits,!number,formType,posTag",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,morphUnits,!number,formType,description",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,semanticClasses",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,semanticClasses,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,thesaurusEntries",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,thesaurusEntries,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,thesaurusEntries,!number,headword",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,thesaurusEntries,!number,antonyms",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,thesaurusEntries,!number,antonyms,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,thesaurusEntries,!number,antonyms,!number,nyms",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,thesaurusEntries,!number,antonyms,!number,nyms,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,thesaurusEntries,!number,antonyms,!number,nyms,!number,nym",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,thesaurusEntries,!number,antonyms,!number,nyms,!number,numEntries",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,thesaurusEntries,!number,antonyms,!number,nyms,!number,isCore",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,thesaurusEntries,!number,synonyms",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,thesaurusEntries,!number,synonyms,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,thesaurusEntries,!number,synonyms,!number,nyms",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,thesaurusEntries,!number,synonyms,!number,nyms,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,thesaurusEntries,!number,synonyms,!number,nyms,!number,nym",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,thesaurusEntries,!number,synonyms,!number,nyms,!number,numEntries",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,thesaurusEntries,!number,synonyms,!number,nyms,!number,isCore",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,thesaurusEntries,!number,examples",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,thesaurusEntries,!number,examples,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,subsenses,!number,thesaurusEntries,!number,synonyms,!number,register",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,exampleGroups",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,exampleGroups,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,exampleGroups,!number,examples",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,exampleGroups,!number,examples,!number",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,exampleGroups,!number,registers",
  "root,dictionaryData,!number,entries,!number,senseFamilies,!number,senses,!number,exampleGroups,!number,registers,!number",

  "root,dictionaryData,!number,entries,!number,subentries",
  "root,dictionaryData,!number,entries,!number,subentries,!number",
  "root,dictionaryData,!number,entries,!number,subentries,!number,type",
  "root,dictionaryData,!number,entries,!number,subentries,!number,lemma",
  "root,dictionaryData,!number,entries,!number,subentries,!number,phonetics",
  "root,dictionaryData,!number,entries,!number,subentries,!number,phonetics,!number",
  "root,dictionaryData,!number,entries,!number,subentries,!number,phonetics,!number,text",
  "root,dictionaryData,!number,entries,!number,subentries,!number,phonetics,!number,oxfordAudio",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,labelSet",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,labelSet,registers",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,labelSet,registers,!number",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,morphUnits",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,morphUnits,!number",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,morphUnits,!number,wordForm",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,morphUnits,!number,formType",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,morphUnits,!number,formType,posTag",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,morphUnits,!number,formType,description",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,conciseDefinition",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,definition",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,definition,fragments",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,definition,fragments,!number",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,definition,fragments,!number,text",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,definition,fragments,!number,isEntryLink",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,definition,text",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,domainClasses",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,domainClasses,!number",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,etymology",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,etymology,etymology",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,etymology,etymology,fragments",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,etymology,etymology,fragments,!number",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,etymology,etymology,fragments,!number,text",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,etymology,etymology,fragments,!number,isEntryLink",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,etymology,etymology,text",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,exampleGroups",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,exampleGroups,!number",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,exampleGroups,!number,examples",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,exampleGroups,!number,examples,!number",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,labelSet",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,labelSet,geographics",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,labelSet,geographics,!number",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,labelSet,registers",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,labelSet,registers,!number",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,semanticClasses",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,semanticClasses,!number",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,subsenses",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,subsenses,!number",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,subsenses,!number,definition",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,subsenses,!number,definition,fragments",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,subsenses,!number,definition,fragments,!number",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,subsenses,!number,definition,fragments,!number,text",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,subsenses,!number,definition,text",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,subsenses,!number,conciseDefinition",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,subsenses,!number,exampleGroups",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,subsenses,!number,exampleGroups,!number",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,subsenses,!number,exampleGroups,!number,examples",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,subsenses,!number,exampleGroups,!number,examples,!number",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,subsenses,!number,labelSet",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,subsenses,!number,labelSet,geographics",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,subsenses,!number,labelSet,geographics,!number",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,thesaurusEntries",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,thesaurusEntries,!number",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,thesaurusEntries,!number,antonyms",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,thesaurusEntries,!number,antonyms,!number",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,thesaurusEntries,!number,antonyms,!number,nyms",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,thesaurusEntries,!number,antonyms,!number,nyms,!number",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,thesaurusEntries,!number,antonyms,!number,nyms,!number,nym",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,thesaurusEntries,!number,antonyms,!number,nyms,!number,numEntries",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,thesaurusEntries,!number,headword",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,thesaurusEntries,!number,synonyms",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,thesaurusEntries,!number,synonyms,!number",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,thesaurusEntries,!number,synonyms,!number,nyms",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,thesaurusEntries,!number,synonyms,!number,nyms,!number",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,thesaurusEntries,!number,synonyms,!number,nyms,!number,nym",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,thesaurusEntries,!number,synonyms,!number,nyms,!number,numEntries",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,thesaurusEntries,!number,synonyms,!number,nyms,!number,isCore",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,thesaurusEntries,!number,synonyms,!number,register",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,thesaurusEntries,!number,examples",
  "root,dictionaryData,!number,entries,!number,subentries,!number,senseFamily,senses,!number,thesaurusEntries,!number,examples,!number",
  "root,dictionaryData,!number,entries,!number,subentries,!number,triggeringPhrases",
  "root,dictionaryData,!number,entries,!number,subentries,!number,triggeringPhrases,!number",

  "root,dictionaryData,!number,queryTerm",
  "root,dictionaryData,!number,usageOverTimeImage",
  "root,dictionaryData,!number,usageOverTimeImage,desktop",
  "root,dictionaryData,!number,usageOverTimeImage,desktop,width",
  "root,dictionaryData,!number,usageOverTimeImage,desktop,height",
  "root,dictionaryData,!number,usageOverTimeImage,desktop,url",
  "root,dictionaryData,!number,usageOverTimeImage,mobile",
  "root,dictionaryData,!number,usageOverTimeImage,mobile,width",
  "root,dictionaryData,!number,usageOverTimeImage,mobile,height",
  "root,dictionaryData,!number,usageOverTimeImage,mobile,url",
  "root,dictionaryData,!number,usageOverTimeImage,tablet",
  "root,dictionaryData,!number,usageOverTimeImage,tablet,width",
  "root,dictionaryData,!number,usageOverTimeImage,tablet,height",
  "root,dictionaryData,!number,usageOverTimeImage,tablet,url",
]

export default (copy: any) => {
  const dfs = (obj: any, parentPath: any = ['root']): any => {
    const entries = Object.entries(obj)

    const childPathList = entries.reduce((processedChildPaths: any, c) => {
      const [k, v] = c
      const childPath = [...parentPath, Number.isNaN(Number(k)) ? k : '!number']
      if (typeof v === 'object' && v !== null) {
        const deepChildPath = dfs(v, childPath)
        return [...processedChildPaths, childPath, ...deepChildPath]
      }
      return [...processedChildPaths, childPath]
    }, [])

    return [
      parentPath,
      ...childPathList,
    ]
  }

  const arr = dfs(copy).map((v: any) => {
    const tv = v as Array<string>
    return tv.join(',')
  })

  const allkeys = Array.from(new Set<string>(arr))
  const un = allkeys.filter((v) => knowkeys.indexOf(v) === -1)
  if (un.length !== 0) {
    alert('unhandle google dict keys')  // eslint-disable-line
    console.log(un)  // eslint-disable-line
  }
}
