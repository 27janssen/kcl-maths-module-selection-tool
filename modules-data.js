// modules-data.js — shared module registry

const ALL_MODULES = [
  {id:"m1",  code:"4CCM111A", name:"Calculus I",                                             level:4, sem:0, prereqs:[], repeatedPrereqs:[]},
  {id:"m2",  code:"4CCM113A", name:"Linear Algebra & Geometry I",                            level:4, sem:0, prereqs:[], repeatedPrereqs:[]},
  {id:"m3",  code:"4CCM115A", name:"Sequences & Series",                                     level:4, sem:0, prereqs:[], repeatedPrereqs:[]},
  {id:"m4",  code:"4CCM121A", name:"Introduction to Algebra",                                level:4, sem:0, prereqs:[], repeatedPrereqs:[]},
  {id:"m5",  code:"4CCM112A", name:"Calculus II",                                            level:4, sem:1, prereqs:["m1"], repeatedPrereqs:[]},
  {id:"m6",  code:"4CCM114A", name:"Linear Algebra & Geometry II",                           level:4, sem:1, prereqs:["m2"], repeatedPrereqs:[]},
  {id:"m7",  code:"4CCM131A", name:"Introduction to Dynamical Systems",                      level:4, sem:1, prereqs:["m1","m2"], repeatedPrereqs:[]},
  {id:"m8",  code:"4CCM141A", name:"Probability & Statistics I",                             level:4, sem:1, prereqs:[], repeatedPrereqs:[]},
  {id:"m9",  code:"5CCM221A", name:"Real Analysis",                                          level:5, sem:2, prereqs:["m1","m3"], repeatedPrereqs:[]},
  {id:"m10", code:"5CCM231A", name:"Classical Dynamics",                                     level:5, sem:2, prereqs:["m7"], repeatedPrereqs:[]},
  {id:"m11", code:"5CCM232A", name:"Groups and Symmetries",                                  level:5, sem:2, prereqs:[], repeatedPrereqs:[]},
  {id:"m12", code:"5CCM224A", name:"Introduction to Number Theory",                          level:5, sem:2, prereqs:["m4"], repeatedPrereqs:["m24"]},
  {id:"m13", code:"5CCM241A", name:"Probability & Statistics II",                            level:5, sem:2, prereqs:["m8"], repeatedPrereqs:[]},
  {id:"m14", code:"5CCM376A", name:"Random Structures & Algorithms",                         level:5, sem:2, prereqs:[], repeatedPrereqs:[]},
  {id:"m15", code:"5CCM211A", name:"Applied Differential Equations",                         level:5, sem:3, prereqs:["m5","m9"], repeatedPrereqs:[]},
  {id:"m16", code:"5CCM212A", name:"Complex Analysis",                                       level:5, sem:3, prereqs:["m5","m9"], repeatedPrereqs:[]},
  {id:"m17", code:"5CCM152B", name:"Computational Methods for Mathematics",                  level:5, sem:3, prereqs:[], repeatedPrereqs:[]},
  {id:"m18", code:"5CCM223A", name:"Geometry of Surfaces",                                   level:5, sem:3, prereqs:["m1","m2","m6","m5","m7"], repeatedPrereqs:["m25"]},
  {id:"m19", code:"5CCM234A", name:"Introductory Quantum Theory",                            level:5, sem:3, prereqs:["m5","m6","m15"], repeatedPrereqs:["m25"]},
  {id:"m20", code:"5CCM242A", name:"Statistical Modelling",                                  level:5, sem:3, prereqs:["m13"], repeatedPrereqs:[]},
  {id:"m21", code:"5CCM251A", name:"Discrete Mathematics",                                   level:5, sem:3, prereqs:[], repeatedPrereqs:[]},
  {id:"m22", code:"5CCM377A", name:"Applied Probability Models",                             level:5, sem:3, prereqs:["m8"], repeatedPrereqs:[]},
  {id:"m23", code:"5CCM141B", name:"Probability & Statistics I for Joint Honours",                level:5, sem:3, prereqs:[], repeatedPrereqs:[]},
  {id:"m24", code:"5CCM121B", name:"Introduction to Algebra for Joint Honours",                   level:5, sem:2, prereqs:[], repeatedPrereqs:[]},
  {id:"m25", code:"5CCM114B", name:"Linear Algebra & Geometry II for Joint Honours",              level:5, sem:3, prereqs:["m2"], repeatedPrereqs:[]},
  {id:"m26", code:"6CCM314A", name:"Mathematical Foundations for Complex Systems Modelling", level:6, sem:4, prereqs:["m8","m1","m5","m9"], repeatedPrereqs:["m23"]},
  {id:"m27", code:"6CCM226B", name:"Metric Spaces & Topology",                               level:6, sem:4, prereqs:["m9"], repeatedPrereqs:[]},
  {id:"m28", code:"6CCM331A", name:"Special Relativity and Electromagnetism",                level:6, sem:4, prereqs:["m5","m15","m11"], repeatedPrereqs:[]},
  {id:"m29", code:"6CCM341A", name:"Fundamentals of Probability Theory",                     level:6, sem:4, prereqs:["m9","m8"], repeatedPrereqs:[]},
  {id:"m30", code:"6CCM350A", name:"Rings & Modules",                                        level:6, sem:4, prereqs:["m4","m6"], repeatedPrereqs:["m24","m25"]},
  {id:"m31", code:"6CCM388A", name:"Mathematical Finance I",                                 level:6, sem:4, prereqs:["m8"], repeatedPrereqs:["m23"]},
  {id:"m32", code:"6CCM436A", name:"Advanced Quantum Mechanics",                             level:6, sem:4, prereqs:["m10","m19"], repeatedPrereqs:[]},
  {id:"m33", code:"6CCMCS02", name:"Theory of Complex Networks",                             level:6, sem:4, prereqs:["m5","m6","m8"], repeatedPrereqs:["m23","m25"]},
  {id:"m34", code:"6CCM224B", name:"Introduction to Number Theory",                level:6, sem:4, prereqs:["m4"], repeatedPrereqs:["m24"]},
  {id:"m35", code:"6CCM241B", name:"Probability & Statistics II",                  level:6, sem:4, prereqs:["m8"], repeatedPrereqs:["m23"]},
  {id:"m36", code:"6CCM347A", name:"Design of Experiments",                                  level:6, sem:4, prereqs:["m20"], repeatedPrereqs:[]},
  {id:"m37", code:"6CCM359A", name:"Numerical & Computational Methods with Python",          level:6, sem:4, prereqs:[], repeatedPrereqs:[]},
  {id:"m38", code:"6CCM376B", name:"Random Structures & Algorithms",               level:6, sem:4, prereqs:[], repeatedPrereqs:[]},
  {id:"m39", code:"6CCM318A", name:"Fourier Analysis",                                       level:6, sem:5, prereqs:["m9"], repeatedPrereqs:[]},
  {id:"m40", code:"6CCM326A", name:"Galois Theory",                                          level:6, sem:5, prereqs:["m30"], repeatedPrereqs:[]},
  {id:"m41", code:"6CCM334A", name:"Space-Time Geometry and General Relativity",             level:6, sem:5, prereqs:["m28"], repeatedPrereqs:[]},
  {id:"m42", code:"6CCM338A", name:"Mathematical Finance II",                                level:6, sem:5, prereqs:["m8","m13","m31"], repeatedPrereqs:["m23","m35"]},
  {id:"m43", code:"6CCM351A", name:"Representation Theory of Finite Groups",                 level:6, sem:5, prereqs:["m11"], repeatedPrereqs:[]},
  {id:"m44", code:"6CCMCS05", name:"Mathematical Biology",                                   level:6, sem:5, prereqs:["m7","m8"], repeatedPrereqs:["m23"]},
  {id:"m45", code:"6CCM223B", name:"Geometry of Surfaces",                        level:6, sem:5, prereqs:["m1","m2","m6","m5","m7"], repeatedPrereqs:["m25"]},
  {id:"m46", code:"6CCM327A", name:"Geometric Topology",                                     level:6, sem:5, prereqs:["m27","m18"], repeatedPrereqs:[]},
  {id:"m47", code:"6CCM242B", name:"Statistical Modelling",                        level:6, sem:5, prereqs:["m13"], repeatedPrereqs:["m35"]},
  {id:"m48", code:"6CCM234B", name:"Introductory Quantum Theory",                  level:6, sem:5, prereqs:["m5","m6","m15"], repeatedPrereqs:["m25"]},
  {id:"m49", code:"6CCM342A", name:"Statistical Inference",                                  level:6, sem:5, prereqs:["m13"], repeatedPrereqs:["m35"]},
  {id:"m50", code:"6CCM344A", name:"Time Series Analysis",                                   level:6, sem:5, prereqs:["m13","m20"], repeatedPrereqs:["m35","m47"]},
  {id:"m51", code:"6CCM377B", name:"Applied Probability Models",                   level:6, sem:5, prereqs:["m8"], repeatedPrereqs:["m23"]},
  {id:"m52", code:"6CCM212B", name:"Complex Analysis",                             level:6, sem:5, prereqs:["m9","m5"], repeatedPrereqs:[]},
];

// Map code -> module page filename
function modulePagePath(code, fromModulesDir) {
  const safe = code.replace(/\s/g,'');
  const prefix = fromModulesDir ? '' : 'modules/';
  return prefix + safe + '.html';
}

// Get module by id
function getModule(id) { return ALL_MODULES.find(m => m.id === id); }
