var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "frontmatter-5",
  "level": "1",
  "url": "frontmatter-5.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface  These notes are meant for a specific audience, namely the students in MTH 406 taught at Grand Valley State University in Winter 2025. Nevertheless, they are publicly available on the web, and anyone can use them in whatever way they wish.  This course is a third-semester course in linear algebra, where the first two semesters cover the content in Understanding Linear Algebra . Our aim will be to generalize some of that content by introducing vector spaces and to provide a more rigorous underpinning for some of the essential results we saw earlier.  The exposition somewhat follows that of Sheldon Axler's Linear Algebra Done Right . An additional reference is Rob Beezer's A First Course in Linear Algebra . Of course, any errors or inconsistencies are mine so please feel free to point them out.  "
},
{
  "id": "sec-vs-intro",
  "level": "1",
  "url": "sec-vs-intro.html",
  "type": "Section",
  "number": "1.1",
  "title": "Vector spaces",
  "body": " Vector spaces   A vector space is simply a mathematical set on which we can perform addition and scalar multiplication. We already have some familiarity with vector spaces since is a good example. However, as mentioned in the introduction to this chapter, polynomials have similar operations so we would like to create a mathematical structure that allows us to study vectors and polynomials as equals. This is why the concept of a vector space is so useful.    Vector spaces  The usual place to get started would be with a general definition of a vector space. However, this is one place in mathematics, among others, where a general definition can obscure the underlying idea. For that reason, let's just start with some examples.   Matrices   Let's look at the set of all matrices, which include the matrices . As we saw in our earlier course, we can multiply a matrix by a scalar and we can add matrices: . Notice that both operations produce a new object that is also a matrix. We say that that the set is closed under these operations.  With these operations, the set of matrices becomes a vector space.    Notice that the entries in our matrices are real numbers . We could instead change the example so that we consider matrices whose entries are in the complex numbers .   Complex matrices   Consider now the set of matrices with complex entries. For example, . Scalar multiplication includes multiplication by complex numbers so we have .    These examples show that vector spaces have an underlying field , which is the set of scalars by which we can multiply. You may or may not know about fields depending on whether you have studied abstract algebra. In either case, the underlying field of our vector spaces will always be either the real numbers or the complex numbers, which we will write as or .  Having seen some examples, we offer a general definition of a vector space.   Vector space   A vector space over a field is a set with two operations, scalar multiplication by elements of and addition, under which is closed. Moreover, these operations satisfy the following natural properties:  Addition is commutative; that is for every pair of .  There is an additive identity; that is, there is an element such that for any element in .  Every element has an additive inverse such that . We will usually write the additive identity as .  Addition is associative, which means that we can regroup a sum in the following way: .  For every , we have .  Scalar multiplication is distributive in the sense that .      That is a long list of properties. Technically speaking, if we want to check that some set is a vector space, we need to check each one of those properties. In practice, however, we will know a vector space when we see one, and we will be fairly loose with these details.   Polynomials   If or , the set of polynomials whose coefficients are in form a vector space .     Polynomials of degree   Rather than the set of all polynomials, we define the set to be the set of all polynomials whose degree is or less. For example, contains all polynomials of degree two or less: where the coefficients are assumed to be either real or complex, as will be either specified or clear from the context.    Of course, the set of all polynomials is larger than the set of quadratic polynomials, and we have . We say that is a vector subspace of .   Vector subspace   A subset of a vector space is called a subspace of if is closed under the operations of scalar multiplication and addition that it inherits from .    Notice that a subspace is itself a vector space and that the underlying fields of and are the same.  Every vector space has two subspaces that we will frequently need to consider. Namely, the subspace consisting of only the zero vector and the entire vector space itself.   Function spaces   Let be the set of functions whose domain is and whose codomain is ; that is, functions of the form . It follows that is a complex vector space.    If we were to consider functions , we would obtain a real vector space. This is not a subspace of , however, since the underlying fields are different. Rather, here are some natural subspaces of .    The following are subspaces of :  The set of functions for which .  The set of periodic functions whose period is 7; that is functions that satisfy for all .  The set of continous functions.    The set of functions that satisfy is, however, not a subspace since it is not closed under scalar multiplication or vector addition.      If is a vector space and and are subspaces, then is also a subspace of as it can be seen that the interection is closed under scalar multiplication and addition.    When working with a vector space , we will frequently refer to the elements of as vectors even though they may be polynomials, matrices, functions, or even something entirely different.    Linear combinations  Our study of linear algebra really began once we introduced linear combinations. Of course, linear combinations are defined purely in terms of scalar multiplication and addition so we can form linear combinations of elements in a vector space.    Suppose that is a set of vectors in a vector space over a field . A linear combination of these vectors is a vector of the form where the scalars belong to the field .      Consider the vector space consisting of polynomials having degree two or less and the polynomials and . We can form the linear combination .    We can also think about concepts like span and linear independence.   Span   The span of a set of vectors in a vector space is the set of all linear combinations that can be formed from the set.    It's not hard to see that the span of a set of vectors in forms a subspace. We just have to check that the span is closed under scalar multiplication and addition. So we will consider vectors . If we multiply by the scalar , we have , which is in the span of the set of vectors. Similarly, , which is also in the span. This demonstrates the following proposition.    The span of a set of vectors in is a subspace of .    We can also define linear dependence as before.   Linear independence   A set of vectors in is linearly dependent if one of the vectors can be written as a linear combination of the others.      In , consider the polynomials . This set of polynomials is linear dependent because .  Notice that this also says that , which leads to the next proposition.      A set of vectors in a vector space is linearly dependent if and only if for some set of scalars with at least one being nonzero.  Equivalently, the set of vectors is linearly independent if and only if implies that all the scalars .    The second statement is logically equivalent to the first so our proof will focus on the first statement. Suppose that the set is linearly dependent and that is the first vector that is a linear combination of vectors that occur previously in the list. This means that there are scalars such that . We can rewrite this expression as , which means that there are scalars with .  Conversely, suppose that for some set of scalars and that be the last nonzero scalar. We can rewrite this expression as . This shows that is a linear combination of the other vectors and that the set of vectors is therefore linearly dependent.      Suppose that is a linear dependent set of vectors and that can be written as a linear combination of the other vectors. Removing from the set does not change the span; that is, .    If , then we can replace in this expression with a linear combination of the other vectors. This shows that can be written as a linear combination of the set of vectors with removed.      Bases    A set of vectors in a vector space forms a basis for is the set is linearly independent and its span is .      We can see that the polynomials form a basis of . Notice that this statement is true for both and .  First, every polynomial in can be written as , showing that , , and span . To see that these polynomials are linearly independent, suppose that , the additivity identiy in . We therefore have from which we conclude that , , and . Therefore, , , and are linearly indepedent by and hence form a basis for .      The polynomials form a basis of .  To see this, suppose that is a polynomial in . We wish to see that can be written as a linear combination of , , and . This means that there are scalars , , and such that This is a linear system of three equations in the three variables , , and , which may be written as , which has a unique solution for every vector . This says that and that these polynomials are linearly independent.      Consider the set of polynomials in . We claim that these polynomials form a basis for .  To see that they are linearly independent, we will suppose that they are linearly dependent and derive a contradiction. Suppose that and that some of the scalars are nonzero. Let be the last nonzero scalar so that . That is, is the only term involving . Therefore, , which contradicts our assumption that .  To see that these polynomials span , we offer a proof by induction. When , we see that spans . Now suppose that span and that is a polynomial in . Notice that the polynomials and have the same coefficient of . Therefore, is a polynomial in and can be written as a linear combination of . This means that       There is no finite set that forms a basis for , the set of all polynomials. Given any finite set, there is a polynomial having a highest degree . Therefore, the polynomial is not in the span of the set so it cannot be a basis.       "
},
{
  "id": "example-vs-matrices",
  "level": "2",
  "url": "sec-vs-intro.html#example-vs-matrices",
  "type": "Example",
  "number": "1.1.1",
  "title": "Matrices.",
  "body": " Matrices   Let's look at the set of all matrices, which include the matrices . As we saw in our earlier course, we can multiply a matrix by a scalar and we can add matrices: . Notice that both operations produce a new object that is also a matrix. We say that that the set is closed under these operations.  With these operations, the set of matrices becomes a vector space.   "
},
{
  "id": "example-vs-complex-matrices",
  "level": "2",
  "url": "sec-vs-intro.html#example-vs-complex-matrices",
  "type": "Example",
  "number": "1.1.2",
  "title": "Complex matrices.",
  "body": " Complex matrices   Consider now the set of matrices with complex entries. For example, . Scalar multiplication includes multiplication by complex numbers so we have .   "
},
{
  "id": "sec-vs-intro-3-8",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-3-8",
  "type": "Definition",
  "number": "1.1.3",
  "title": "Vector space.",
  "body": " Vector space   A vector space over a field is a set with two operations, scalar multiplication by elements of and addition, under which is closed. Moreover, these operations satisfy the following natural properties:  Addition is commutative; that is for every pair of .  There is an additive identity; that is, there is an element such that for any element in .  Every element has an additive inverse such that . We will usually write the additive identity as .  Addition is associative, which means that we can regroup a sum in the following way: .  For every , we have .  Scalar multiplication is distributive in the sense that .     "
},
{
  "id": "sec-vs-intro-3-10",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-3-10",
  "type": "Example",
  "number": "1.1.4",
  "title": "Polynomials.",
  "body": " Polynomials   If or , the set of polynomials whose coefficients are in form a vector space .   "
},
{
  "id": "sec-vs-intro-3-11",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-3-11",
  "type": "Example",
  "number": "1.1.5",
  "title": "Polynomials of degree <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": " Polynomials of degree   Rather than the set of all polynomials, we define the set to be the set of all polynomials whose degree is or less. For example, contains all polynomials of degree two or less: where the coefficients are assumed to be either real or complex, as will be either specified or clear from the context.   "
},
{
  "id": "sec-vs-intro-3-13",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-3-13",
  "type": "Definition",
  "number": "1.1.6",
  "title": "Vector subspace.",
  "body": " Vector subspace   A subset of a vector space is called a subspace of if is closed under the operations of scalar multiplication and addition that it inherits from .   "
},
{
  "id": "sec-vs-intro-3-16",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-3-16",
  "type": "Example",
  "number": "1.1.7",
  "title": "Function spaces.",
  "body": " Function spaces   Let be the set of functions whose domain is and whose codomain is ; that is, functions of the form . It follows that is a complex vector space.   "
},
{
  "id": "sec-vs-intro-3-18",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-3-18",
  "type": "Example",
  "number": "1.1.8",
  "title": "",
  "body": "  The following are subspaces of :  The set of functions for which .  The set of periodic functions whose period is 7; that is functions that satisfy for all .  The set of continous functions.    The set of functions that satisfy is, however, not a subspace since it is not closed under scalar multiplication or vector addition.   "
},
{
  "id": "sec-vs-intro-3-19",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-3-19",
  "type": "Example",
  "number": "1.1.9",
  "title": "",
  "body": "  If is a vector space and and are subspaces, then is also a subspace of as it can be seen that the interection is closed under scalar multiplication and addition.   "
},
{
  "id": "sec-vs-intro-4-3",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-4-3",
  "type": "Definition",
  "number": "1.1.10",
  "title": "",
  "body": "  Suppose that is a set of vectors in a vector space over a field . A linear combination of these vectors is a vector of the form where the scalars belong to the field .   "
},
{
  "id": "sec-vs-intro-4-4",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-4-4",
  "type": "Example",
  "number": "1.1.11",
  "title": "",
  "body": "  Consider the vector space consisting of polynomials having degree two or less and the polynomials and . We can form the linear combination .   "
},
{
  "id": "sec-vs-intro-4-6",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-4-6",
  "type": "Definition",
  "number": "1.1.12",
  "title": "Span.",
  "body": " Span   The span of a set of vectors in a vector space is the set of all linear combinations that can be formed from the set.   "
},
{
  "id": "sec-vs-intro-4-8",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-4-8",
  "type": "Proposition",
  "number": "1.1.13",
  "title": "",
  "body": "  The span of a set of vectors in is a subspace of .   "
},
{
  "id": "sec-vs-intro-4-10",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-4-10",
  "type": "Definition",
  "number": "1.1.14",
  "title": "Linear independence.",
  "body": " Linear independence   A set of vectors in is linearly dependent if one of the vectors can be written as a linear combination of the others.   "
},
{
  "id": "sec-vs-intro-4-11",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-4-11",
  "type": "Example",
  "number": "1.1.15",
  "title": "",
  "body": "  In , consider the polynomials . This set of polynomials is linear dependent because .  Notice that this also says that , which leads to the next proposition.   "
},
{
  "id": "prop-lin-indep-scalars",
  "level": "2",
  "url": "sec-vs-intro.html#prop-lin-indep-scalars",
  "type": "Proposition",
  "number": "1.1.16",
  "title": "",
  "body": "  A set of vectors in a vector space is linearly dependent if and only if for some set of scalars with at least one being nonzero.  Equivalently, the set of vectors is linearly independent if and only if implies that all the scalars .    The second statement is logically equivalent to the first so our proof will focus on the first statement. Suppose that the set is linearly dependent and that is the first vector that is a linear combination of vectors that occur previously in the list. This means that there are scalars such that . We can rewrite this expression as , which means that there are scalars with .  Conversely, suppose that for some set of scalars and that be the last nonzero scalar. We can rewrite this expression as . This shows that is a linear combination of the other vectors and that the set of vectors is therefore linearly dependent.   "
},
{
  "id": "prop-lin-dep-span",
  "level": "2",
  "url": "sec-vs-intro.html#prop-lin-dep-span",
  "type": "Proposition",
  "number": "1.1.17",
  "title": "",
  "body": "  Suppose that is a linear dependent set of vectors and that can be written as a linear combination of the other vectors. Removing from the set does not change the span; that is, .    If , then we can replace in this expression with a linear combination of the other vectors. This shows that can be written as a linear combination of the set of vectors with removed.   "
},
{
  "id": "sec-vs-intro-5-2",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-2",
  "type": "Definition",
  "number": "1.1.18",
  "title": "",
  "body": "  A set of vectors in a vector space forms a basis for is the set is linearly independent and its span is .   "
},
{
  "id": "ex-poly-basis-1",
  "level": "2",
  "url": "sec-vs-intro.html#ex-poly-basis-1",
  "type": "Example",
  "number": "1.1.19",
  "title": "",
  "body": "  We can see that the polynomials form a basis of . Notice that this statement is true for both and .  First, every polynomial in can be written as , showing that , , and span . To see that these polynomials are linearly independent, suppose that , the additivity identiy in . We therefore have from which we conclude that , , and . Therefore, , , and are linearly indepedent by and hence form a basis for .   "
},
{
  "id": "ex-poly-basis-2",
  "level": "2",
  "url": "sec-vs-intro.html#ex-poly-basis-2",
  "type": "Example",
  "number": "1.1.20",
  "title": "",
  "body": "  The polynomials form a basis of .  To see this, suppose that is a polynomial in . We wish to see that can be written as a linear combination of , , and . This means that there are scalars , , and such that This is a linear system of three equations in the three variables , , and , which may be written as , which has a unique solution for every vector . This says that and that these polynomials are linearly independent.   "
},
{
  "id": "sec-vs-intro-5-5",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-5",
  "type": "Example",
  "number": "1.1.21",
  "title": "",
  "body": "  Consider the set of polynomials in . We claim that these polynomials form a basis for .  To see that they are linearly independent, we will suppose that they are linearly dependent and derive a contradiction. Suppose that and that some of the scalars are nonzero. Let be the last nonzero scalar so that . That is, is the only term involving . Therefore, , which contradicts our assumption that .  To see that these polynomials span , we offer a proof by induction. When , we see that spans . Now suppose that span and that is a polynomial in . Notice that the polynomials and have the same coefficient of . Therefore, is a polynomial in and can be written as a linear combination of . This means that    "
},
{
  "id": "sec-vs-intro-5-6",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-6",
  "type": "Example",
  "number": "1.1.22",
  "title": "",
  "body": "  There is no finite set that forms a basis for , the set of all polynomials. Given any finite set, there is a polynomial having a highest degree . Therefore, the polynomial is not in the span of the set so it cannot be a basis.   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
