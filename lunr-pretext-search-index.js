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
  "id": "sec-vs-intro",
  "level": "1",
  "url": "sec-vs-intro.html",
  "type": "Section",
  "number": "1.1",
  "title": "Vector spaces",
  "body": " Vector spaces   A vector space is simply a mathematical set on which we can perform addition and scalar multiplication. We already have some familiarity with vector spaces since is a good example. However, as mentioned in the introduction to this chapter, polynomials have similar operations so we would like to create a mathematical structure that allows us to study vectors and polynomials as equals. This is why the concept of a vector space is so useful.    Vector spaces  The usual place to get started would be with a general definition of a vector space. However, this is one place in mathematics, among others, where a general definition can obscure the underlying idea. For that reason, let's just start with some examples.   Matrices   Let's look at the set of all matrices, which include the matrices . As we saw in our earlier course, we can multiply a matrix by a scalar and we can add matrices: . Notice that both operations produce a new object that is also a matrix. We say that that the set is closed under these operations.  With these operations, the set of matrices becomes a vector space.    Notice that the entries in our matrices are real numbers . We could instead change the example so that we consider matrices whose entries are in the complex numbers .   Complex matrices   Consider now the set of matrices with complex entries. For example, . Scalar multiplication includes multiplication by complex numbers so we have .    These examples show that vector spaces have an underlying field , which is the set of scalars by which we can multiply. You may or may not know about fields depending on whether you have studied abstract algebra. In either case, the underlying field of our vector spaces will always be either the real numbers or the complex numbers, which we will write as or .  Having seen some examples, we offer a general definition of a vector space.   Vector space   A vector space over a field is a set with two operations, scalar multiplication by elements of and addition, under which is closed. Moreover, these operations satisfy the following natural properties:  Addition is commutative; that is for every pair of .  There is an additive identity; that is, there is an element such that for any element in .  Every element has an additive inverse such that . We will usually write the additive identity as .  Addition is associative, which means that we can regroup a sum in the following way: .  For every , we have .  Scalar multiplication is distributive in the sense that .      That is a long list of properties. Technically speaking, if we want to check that some set is a vector space, we need to check each one of those properties. In practice, however, we will know a vector space when we see one, and we will be fairly loose with these details.   Polynomials   If or , the set of polynomials whose coefficients are in form a vector space .     Polynomials of degree   Rather than the set of all polynomials, we define the set to be the set of all polynomials whose degree is or less. For example, contains all polynomials of degree two or less: where the coefficients are assumed to be either real or complex, as will be either specified or clear from the context.    Of course, the set of all polynomials is larger than the set of quadratic polynomials, and we have . We say that is a vector subspace of .   Vector subspace   A subset of a vector space is called a subspace of if is closed under the operations of scalar multiplication and addition that it inherits from .    Notice that a subspace is itself a vector space and that the underlying fields of and are the same.  Every vector space has two subspaces that we will frequently need to consider. Namely, the subspace consisting of only the zero vector and the entire vector space itself.   Function spaces   Let be the set of functions whose domain is and whose codomain is ; that is, functions of the form . It follows that is a complex vector space.    If we were to consider functions , we would obtain a real vector space. This is not a subspace of , however, since the underlying fields are different. Rather, here are some natural subspaces of .    The following are subspaces of :  The set of functions for which .  The set of periodic functions whose period is 7; that is functions that satisfy for all .  The set of continous functions.    The set of functions that satisfy is, however, not a subspace since it is not closed under scalar multiplication or vector addition.      If is a vector space and and are subspaces, then is also a subspace of as it can be seen that the interection is closed under scalar multiplication and addition.    When working with a vector space , we will frequently refer to the elements of as vectors even though they may be polynomials, matrices, functions, or even something entirely different.    Linear combinations  Our study of linear algebra really began once we introduced linear combinations. Of course, linear combinations are defined purely in terms of scalar multiplication and addition so we can form linear combinations of elements in a vector space.    Suppose that is a set of vectors in a vector space over a field . A linear combination of these vectors is a vector of the form where the scalars belong to the field .      Consider the vector space consisting of polynomials having degree two or less and the polynomials and . We can form the linear combination .    We can also think about concepts like span and linear independence.   Span   The span of a set of vectors in a vector space is the set of all linear combinations that can be formed from the set.    It's not hard to see that the span of a set of vectors in forms a subspace. We just have to check that the span is closed under scalar multiplication and addition. So we will consider vectors . If we multiply by the scalar , we have , which is in the span of the set of vectors. Similarly, , which is also in the span. This demonstrates the following proposition.    The span of a set of vectors in is a subspace of .    We can also define linear dependence as before.   Linear independence   A set of vectors in is linearly dependent if one of the vectors can be written as a linear combination of the others.      In , consider the polynomials . This set of polynomials is linear dependent because .  Notice that this also says that , which leads to the next proposition.      A set of vectors in a vector space is linearly dependent if and only if for some set of scalars with at least one being nonzero.  Equivalently, the set of vectors is linearly independent if and only if implies that all the scalars .    Our proof will focus on the first statement. Suppose that and that . Then we can rewrite where the sum on the right does not include the term. This shows that the set of vectors is linear dependent.  Conversely, suppose that where the sum on the right does not include the term. Then , which verifies the condition of the proposition.      Suppose that is a linear dependent set of vectors and that can be written as a linear combination of the other vectors. Removing from the set does not change the span; that is, .    If , then we can replace in this expression with a linear combination of the other vectors. This shows that can be written as a linear combination of the set of vectors with removed.      Bases    A set of vectors in a vector space forms a basis for is the set is linearly independent and its span is .      The polynomials form a basis of . Notice that this statement is true for both and .      The polynomials form a basis of .      There is no finite set that forms a basis for , the set of all polynomials. Given any finite set, there is a polynomial having a highest degree . Therefore, the polynomial is not in the span of the set so it cannot be a basis.      We say that a vector space is finite dimensional if there is a finite set whose span is . Otherwise, we say that is infinite dimensional.    Notice that any finite dimensional vector space must have a basis.    Any finite dimensional vector space has a basis.    If is a finite dimensional vector space, there is a finite set of vectors whose span is . If this set of vectors is linearly independent, then it forms a basis. It not, we can remove one vector that is a linear combination of the others. The span of the remaining vectors is still so we continue removing vectors one at a time until we obtain a linear independent set, which must be a basis.    Notice that the two bases for in and both consist of three polynomials. This is generally true as stated in the next proposition.    If is a finite dimensional vector space, then any two bases have the same number of vectors.    We will give two proofs, beginning with the outline of a proof that should seem familiar. Suppose that and define bases and respectively. Then we can write , which defines a matrix . Similarly, we define a matrix by writing in terms of the basis . We can now verify that and , which says that and are inverses and hence square. Therefore, .    We will present another proof illustrating the type of thinking that will be useful as we move forward. Suppose again that we have two bases and . Our goal is to show that .  We first append to the vectors in the other basis to obtain the list . Since , we know that the span of this set is also . Furthermore, since is a linear combination of the other vectors, we know that this is a linearly dependent set. We remove the first vector that is a linear combination of the vectors before it. By , the span of the remaining vectors is .  Now we append to the front of the list: . Once again, the span of this set is still and the set is linearly dependent since is a linear combination of the other vectors. We remove the first vector in the list that is a linear combination of the others. Since the set of vectors is linearly independent, the vector that we remove must be one of the vectors. The span of the resulting list must still be by .  We can repeat this process until we have added all of the vectors in the set . Each time we add a vector from this set, we remove one of the vectors in the set . This tells us that .  We can repeat this argument after interchanging the roles of the two bases to also conclude that , which tells us that .    Contained within the previous proof is the proof of this proposition.    The number of vectors in a linearly independent set in the vector space is less than or equal to the number of vectors in any set whose span is .    Assuming there is a finite basis, we define the dimension of a vector space to be the number of vectors in a basis. In this case, the number of vectors in any basis is the same so this definition does not depend on which basis we choose.    If a vector space has a basis with vectors, we say that the dimension of is and write .    Because of , we have the following proposition.    If is a subspace of the finite dimensional vector space , then is also finite dimensional and .      Any linearly independent set in a vector space can be extended to a basis for .    Suppose that is a linearly independent set in and that is a basis for . Join the two lists together to obtain . We are guaranteed that the span of this set is . If it is not a linear independent set, then we remove the first vector that is a linear combination of the others. Since the vectors are linearly independent, the vector that is removed must be one of the vectors. Continuing in this way, we eventually obtain a basis that includes the vectors .    As a conseqence, we obtain    If is a subspace of and , then .    Some further conseqences of these ideas follow.    If is a finite dimensional vector space of dimension and is a set of vectors in , then   if the set of vectors is linearly independent, then it is a basis.    if the span of the set of vectors is , then it is a basis.         Sums of subspaces  Here is a construction whose usefulness will become more clear over time as it helps us to break vector spaces into simpler pieces. Suppose that we have a vector space and that and are subspaces. We can define a new subspace .    Given subspaces and of , we form as the subset of whose elements can be written in the form where and .      Suppose that , is the 1-dimensional subspace whose vectors are , and is the 1-dimensional subspace whose vectors are . Then is the 2-dimensional subspace whose vectors have the form .      Suppose that , is the 2-dimensional subspace having vectors , and is the 2-dimensional subspace having vectors . Then is the three-dimensional subspace consisting of vectors .      If and are subspaces of , then is also a subspace of and .    One can verify that is closed under scalar multiplication and addition, which means that it forms a subspace of .  Suppose that has a basis . Since is a subspace of , this basis can be extended to a basis for by adding vectors . Similarly, the basis for can be extended to a basis for by adding vectors . Putting all these vectors together gives the set , which we claim is a basis for .  Any vector in can be written as the sum of a vector in and a vector in . Therefore, the span of the vectors in is since contained within is a basis for and a basis for .  Moreover, the set of vectors is linearly independent. Suppose that . Rearranging this gives . The vector on the left is in but not , while the vector on the right is in . The only way this can happen is for both vectors to be zero, which means that all the coefficients must be zero.      If , we say that is the direct sum of and and denote it as .    As a consequence of , we have that     .    As a consequence of , we have    If is a subspace of , then there is another subspace such that .      If , we say that is a complement of .     "
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
  "id": "sec-vs-intro-4-12",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-4-12",
  "type": "Proposition",
  "number": "1.1.16",
  "title": "",
  "body": "  A set of vectors in a vector space is linearly dependent if and only if for some set of scalars with at least one being nonzero.  Equivalently, the set of vectors is linearly independent if and only if implies that all the scalars .    Our proof will focus on the first statement. Suppose that and that . Then we can rewrite where the sum on the right does not include the term. This shows that the set of vectors is linear dependent.  Conversely, suppose that where the sum on the right does not include the term. Then , which verifies the condition of the proposition.   "
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
  "body": "  The polynomials form a basis of . Notice that this statement is true for both and .   "
},
{
  "id": "ex-poly-basis-2",
  "level": "2",
  "url": "sec-vs-intro.html#ex-poly-basis-2",
  "type": "Example",
  "number": "1.1.20",
  "title": "",
  "body": "  The polynomials form a basis of .   "
},
{
  "id": "sec-vs-intro-5-5",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-5",
  "type": "Example",
  "number": "1.1.21",
  "title": "",
  "body": "  There is no finite set that forms a basis for , the set of all polynomials. Given any finite set, there is a polynomial having a highest degree . Therefore, the polynomial is not in the span of the set so it cannot be a basis.   "
},
{
  "id": "sec-vs-intro-5-6",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-6",
  "type": "Definition",
  "number": "1.1.22",
  "title": "",
  "body": "  We say that a vector space is finite dimensional if there is a finite set whose span is . Otherwise, we say that is infinite dimensional.   "
},
{
  "id": "sec-vs-intro-5-8",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-8",
  "type": "Proposition",
  "number": "1.1.23",
  "title": "",
  "body": "  Any finite dimensional vector space has a basis.    If is a finite dimensional vector space, there is a finite set of vectors whose span is . If this set of vectors is linearly independent, then it forms a basis. It not, we can remove one vector that is a linear combination of the others. The span of the remaining vectors is still so we continue removing vectors one at a time until we obtain a linear independent set, which must be a basis.   "
},
{
  "id": "sec-vs-intro-5-10",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-10",
  "type": "Proposition",
  "number": "1.1.24",
  "title": "",
  "body": "  If is a finite dimensional vector space, then any two bases have the same number of vectors.    We will give two proofs, beginning with the outline of a proof that should seem familiar. Suppose that and define bases and respectively. Then we can write , which defines a matrix . Similarly, we define a matrix by writing in terms of the basis . We can now verify that and , which says that and are inverses and hence square. Therefore, .    We will present another proof illustrating the type of thinking that will be useful as we move forward. Suppose again that we have two bases and . Our goal is to show that .  We first append to the vectors in the other basis to obtain the list . Since , we know that the span of this set is also . Furthermore, since is a linear combination of the other vectors, we know that this is a linearly dependent set. We remove the first vector that is a linear combination of the vectors before it. By , the span of the remaining vectors is .  Now we append to the front of the list: . Once again, the span of this set is still and the set is linearly dependent since is a linear combination of the other vectors. We remove the first vector in the list that is a linear combination of the others. Since the set of vectors is linearly independent, the vector that we remove must be one of the vectors. The span of the resulting list must still be by .  We can repeat this process until we have added all of the vectors in the set . Each time we add a vector from this set, we remove one of the vectors in the set . This tells us that .  We can repeat this argument after interchanging the roles of the two bases to also conclude that , which tells us that .   "
},
{
  "id": "prop-lin-indep-num",
  "level": "2",
  "url": "sec-vs-intro.html#prop-lin-indep-num",
  "type": "Proposition",
  "number": "1.1.25",
  "title": "",
  "body": "  The number of vectors in a linearly independent set in the vector space is less than or equal to the number of vectors in any set whose span is .   "
},
{
  "id": "sec-vs-intro-5-14",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-14",
  "type": "Definition",
  "number": "1.1.26",
  "title": "",
  "body": "  If a vector space has a basis with vectors, we say that the dimension of is and write .   "
},
{
  "id": "sec-vs-intro-5-16",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-16",
  "type": "Proposition",
  "number": "1.1.27",
  "title": "",
  "body": "  If is a subspace of the finite dimensional vector space , then is also finite dimensional and .   "
},
{
  "id": "prop-basis-extend",
  "level": "2",
  "url": "sec-vs-intro.html#prop-basis-extend",
  "type": "Proposition",
  "number": "1.1.28",
  "title": "",
  "body": "  Any linearly independent set in a vector space can be extended to a basis for .    Suppose that is a linearly independent set in and that is a basis for . Join the two lists together to obtain . We are guaranteed that the span of this set is . If it is not a linear independent set, then we remove the first vector that is a linear combination of the others. Since the vectors are linearly independent, the vector that is removed must be one of the vectors. Continuing in this way, we eventually obtain a basis that includes the vectors .   "
},
{
  "id": "sec-vs-intro-5-19",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-19",
  "type": "Proposition",
  "number": "1.1.29",
  "title": "",
  "body": "  If is a subspace of and , then .   "
},
{
  "id": "sec-vs-intro-5-21",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-21",
  "type": "Proposition",
  "number": "1.1.30",
  "title": "",
  "body": "  If is a finite dimensional vector space of dimension and is a set of vectors in , then   if the set of vectors is linearly independent, then it is a basis.    if the span of the set of vectors is , then it is a basis.      "
},
{
  "id": "sec-vs-intro-6-3",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-6-3",
  "type": "Definition",
  "number": "1.1.31",
  "title": "",
  "body": "  Given subspaces and of , we form as the subset of whose elements can be written in the form where and .   "
},
{
  "id": "sec-vs-intro-6-4",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-6-4",
  "type": "Example",
  "number": "1.1.32",
  "title": "",
  "body": "  Suppose that , is the 1-dimensional subspace whose vectors are , and is the 1-dimensional subspace whose vectors are . Then is the 2-dimensional subspace whose vectors have the form .   "
},
{
  "id": "sec-vs-intro-6-5",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-6-5",
  "type": "Example",
  "number": "1.1.33",
  "title": "",
  "body": "  Suppose that , is the 2-dimensional subspace having vectors , and is the 2-dimensional subspace having vectors . Then is the three-dimensional subspace consisting of vectors .   "
},
{
  "id": "prop-dim-sum",
  "level": "2",
  "url": "sec-vs-intro.html#prop-dim-sum",
  "type": "Proposition",
  "number": "1.1.34",
  "title": "",
  "body": "  If and are subspaces of , then is also a subspace of and .    One can verify that is closed under scalar multiplication and addition, which means that it forms a subspace of .  Suppose that has a basis . Since is a subspace of , this basis can be extended to a basis for by adding vectors . Similarly, the basis for can be extended to a basis for by adding vectors . Putting all these vectors together gives the set , which we claim is a basis for .  Any vector in can be written as the sum of a vector in and a vector in . Therefore, the span of the vectors in is since contained within is a basis for and a basis for .  Moreover, the set of vectors is linearly independent. Suppose that . Rearranging this gives . The vector on the left is in but not , while the vector on the right is in . The only way this can happen is for both vectors to be zero, which means that all the coefficients must be zero.   "
},
{
  "id": "sec-vs-intro-6-7",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-6-7",
  "type": "Definition",
  "number": "1.1.35",
  "title": "",
  "body": "  If , we say that is the direct sum of and and denote it as .   "
},
{
  "id": "sec-vs-intro-6-9",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-6-9",
  "type": "Proposition",
  "number": "1.1.36",
  "title": "",
  "body": "   .   "
},
{
  "id": "sec-vs-intro-6-11",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-6-11",
  "type": "Proposition",
  "number": "1.1.37",
  "title": "",
  "body": "  If is a subspace of , then there is another subspace such that .   "
},
{
  "id": "sec-vs-intro-6-12",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-6-12",
  "type": "Definition",
  "number": "1.1.38",
  "title": "",
  "body": "  If , we say that is a complement of .   "
},
{
  "id": "sec-lt-intro",
  "level": "1",
  "url": "sec-lt-intro.html",
  "type": "Section",
  "number": "1.2",
  "title": "Linear transformations",
  "body": " Linear transformations   We earlier viewed an matrix as defining a matrix transformation by . Due to the linearity of matrix multiplication, this meant that . Now that we are working with vector spaces, we can define linear transformations, which are functions between vector spaces that satisfy these properties.    Linear transformations  Given two vector spaces, and , we can define a linear transformation between them by generalizing our earlier notion of matrix transformation.    If and are vector spaces, then a linear transformation is a function such that, for every scalar and pair of vectors , we have .      Suppose that . Then defined by is a linear transformation.      Suppose that , the set of functions . Then is a linear transformation .      Suppose that and . If is a polynomial in , define the function where is the derivative of . Two common rules of differentiation, the constant multiplier rule and the addition rule, imply that is a linear transformation.      If and , then is a linear transformation.      Suppose that is the vector space of matrices. Then by is not a linear transformation because .      Given two vector spaces, and , the set of linear transformations will be denoted as .      Given two vector spaces and , the set is a vector spaces having .     Notation  While a linear transformation is a function, we will frequently write , without parentheses, when we mean . This is similar to how we often write rather than in other courses.     The null space and range  A linear transformation creates a subspace of and a subspace of .    If is a linear transformation, we define the null space and range of to be .      Consider the linear transformation defined by the matrix . The null space is the set of vectors for which . We earlier called this , the mull space of , and here we see that it is the subspace of spanned by and .  Similarly, the range, , is the subspace of that we formerly called , the column space of . As such, a basis for is given by and .      Suppose that and and that where . A general polynomial in has the form so that . Therefore, is the set of polynomials for which so that . We also see that     We will frequently make use of the next proposition.    If is a linear transformation, then is a subspace of and is a subspace of . Moreover, .    First, suppose that and are in . Then , which shows that is closed under scalar multiplication and addition and is therefore a subspace.  In the same way, suppose that and are in . We must have vectors and such that and . It then follows that , which shows that is a subspace of .  Now suppose that is a basis for , which we extend to a basis for by adding vectors . We also define .  Given a vector in , we can write so that . This shows that span .  We also claim that forms a linearly independent set. Suppose that , which means that is in so that this vector is a linear combination of . This can only happen if the vector is zero, showing that and the vectors are linearly independent.  We conclude that is a basis for and we have .      Suppose . If , we say that is surjective . If , we say that is injective .    If is surjective, notice that every vector has a vector for which .  If is injective and , then since meaning .  The following proposition follows immediately from .    If is surjective, then .  Similarly, if is injective, then .      A linear transformation is called an isomorphism if is both surjective and injective.      If is an isomorphism, then . Moreover, for every , there is a unique such that .      The linear transformation defined by is an isomorphism, which shows that . In general, .      The linear transformation defined by is injective but not surjective.  However, if is a finite dimensional vector space and is injective, it is also an isomorphism by Similarly, if is surjective, it is also an isomorphism.      Representing linear transformations with matrices  We began this section by recalling our earlier study of matrix transformations and used that as motivation for introducing linear transformations. However, the connection is closer than just that. Suppose that is a linear transformation and that we have a basis for and a basis for . We then have , which defines an matrix .    If is a linear transformation, a basis for and a basis for , we say that this matrix is the matrix associated to with respect to these bases. We will frequently drop the subscript when the transformation is clear from context.      Consider where . If we choose the bases and , then .      Dual spaces   "
},
{
  "id": "sec-lt-intro-3-3",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-3-3",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "  If and are vector spaces, then a linear transformation is a function such that, for every scalar and pair of vectors , we have .   "
},
{
  "id": "sec-lt-intro-3-4",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-3-4",
  "type": "Example",
  "number": "1.2.2",
  "title": "",
  "body": "  Suppose that . Then defined by is a linear transformation.   "
},
{
  "id": "sec-lt-intro-3-5",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-3-5",
  "type": "Example",
  "number": "1.2.3",
  "title": "",
  "body": "  Suppose that , the set of functions . Then is a linear transformation .   "
},
{
  "id": "sec-lt-intro-3-6",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-3-6",
  "type": "Example",
  "number": "1.2.4",
  "title": "",
  "body": "  Suppose that and . If is a polynomial in , define the function where is the derivative of . Two common rules of differentiation, the constant multiplier rule and the addition rule, imply that is a linear transformation.   "
},
{
  "id": "sec-lt-intro-3-7",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-3-7",
  "type": "Example",
  "number": "1.2.5",
  "title": "",
  "body": "  If and , then is a linear transformation.   "
},
{
  "id": "sec-lt-intro-3-8",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-3-8",
  "type": "Example",
  "number": "1.2.6",
  "title": "",
  "body": "  Suppose that is the vector space of matrices. Then by is not a linear transformation because .   "
},
{
  "id": "sec-lt-intro-3-9",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-3-9",
  "type": "Definition",
  "number": "1.2.7",
  "title": "",
  "body": "  Given two vector spaces, and , the set of linear transformations will be denoted as .   "
},
{
  "id": "sec-lt-intro-3-10",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-3-10",
  "type": "Proposition",
  "number": "1.2.8",
  "title": "",
  "body": "  Given two vector spaces and , the set is a vector spaces having .   "
},
{
  "id": "sec-lt-intro-4-3",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-3",
  "type": "Definition",
  "number": "1.2.9",
  "title": "",
  "body": "  If is a linear transformation, we define the null space and range of to be .   "
},
{
  "id": "sec-lt-intro-4-4",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-4",
  "type": "Example",
  "number": "1.2.10",
  "title": "",
  "body": "  Consider the linear transformation defined by the matrix . The null space is the set of vectors for which . We earlier called this , the mull space of , and here we see that it is the subspace of spanned by and .  Similarly, the range, , is the subspace of that we formerly called , the column space of . As such, a basis for is given by and .   "
},
{
  "id": "sec-lt-intro-4-5",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-5",
  "type": "Example",
  "number": "1.2.11",
  "title": "",
  "body": "  Suppose that and and that where . A general polynomial in has the form so that . Therefore, is the set of polynomials for which so that . We also see that    "
},
{
  "id": "prop-nul-range-dims",
  "level": "2",
  "url": "sec-lt-intro.html#prop-nul-range-dims",
  "type": "Proposition",
  "number": "1.2.12",
  "title": "",
  "body": "  If is a linear transformation, then is a subspace of and is a subspace of . Moreover, .    First, suppose that and are in . Then , which shows that is closed under scalar multiplication and addition and is therefore a subspace.  In the same way, suppose that and are in . We must have vectors and such that and . It then follows that , which shows that is a subspace of .  Now suppose that is a basis for , which we extend to a basis for by adding vectors . We also define .  Given a vector in , we can write so that . This shows that span .  We also claim that forms a linearly independent set. Suppose that , which means that is in so that this vector is a linear combination of . This can only happen if the vector is zero, showing that and the vectors are linearly independent.  We conclude that is a basis for and we have .   "
},
{
  "id": "sec-lt-intro-4-8",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-8",
  "type": "Definition",
  "number": "1.2.13",
  "title": "",
  "body": "  Suppose . If , we say that is surjective . If , we say that is injective .   "
},
{
  "id": "sec-lt-intro-4-12",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-12",
  "type": "Proposition",
  "number": "1.2.14",
  "title": "",
  "body": "  If is surjective, then .  Similarly, if is injective, then .   "
},
{
  "id": "sec-lt-intro-4-13",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-13",
  "type": "Definition",
  "number": "1.2.15",
  "title": "",
  "body": "  A linear transformation is called an isomorphism if is both surjective and injective.   "
},
{
  "id": "sec-lt-intro-4-14",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-14",
  "type": "Proposition",
  "number": "1.2.16",
  "title": "",
  "body": "  If is an isomorphism, then . Moreover, for every , there is a unique such that .   "
},
{
  "id": "sec-lt-intro-4-15",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-15",
  "type": "Example",
  "number": "1.2.17",
  "title": "",
  "body": "  The linear transformation defined by is an isomorphism, which shows that . In general, .   "
},
{
  "id": "sec-lt-intro-4-16",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-16",
  "type": "Example",
  "number": "1.2.18",
  "title": "",
  "body": "  The linear transformation defined by is injective but not surjective.  However, if is a finite dimensional vector space and is injective, it is also an isomorphism by Similarly, if is surjective, it is also an isomorphism.   "
},
{
  "id": "sec-lt-intro-5-3",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-5-3",
  "type": "Definition",
  "number": "1.2.19",
  "title": "",
  "body": "  If is a linear transformation, a basis for and a basis for , we say that this matrix is the matrix associated to with respect to these bases. We will frequently drop the subscript when the transformation is clear from context.   "
},
{
  "id": "sec-lt-intro-5-4",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-5-4",
  "type": "Example",
  "number": "1.2.20",
  "title": "",
  "body": "  Consider where . If we choose the bases and , then .   "
},
{
  "id": "sec-polys",
  "level": "1",
  "url": "sec-polys.html",
  "type": "Section",
  "number": "2.1",
  "title": "The minimal polynomial",
  "body": " The minimal polynomial   This section will describe some important properties about polynomials and demonstrate how they might help us understand linear transformations.  We will begin by studying familiar polynomials, such as you saw in high school algebra. For example, is a quadratic polynomial. Eventually, we will consider polynomials evaluated on an operator . For instance, evaluating on the operator produces a new operator . As a preview for how this may be useful, the polynomial leads to the operator whose null space is the set of eigenvectors associated to the eigenvalue .    Properties of Polynomials  We will be interested in polynomials that depend on a single variable, which will often be . A general polynomial has the form where are the coefficients of and are elements in either or .  The degree of a polynomial is the highest power of whose coefficient is nonzero. For example, the degree of is .  There are a few operations that we can perform on polynomials. Suppose that and .  Scalar multiplication  As we saw earlier, a polynomial may be multiplied by a scalar. For instance,    Addition  Polynomials may also be added in the usual way.    Multiplication  We multiply polynomials term by term so that More generally, denoting the coefficients of by and the coefficients of by , the coefficients of are .  Two important properites follow from this definition of polynomial multiplication. First, the order in which we multiply polynomials is irrelevant; that is, .  Second, the degree of the product is the sum of the degrees; that is, .     Integers satisfy a property often called the Division Algorithm . Suppose that and are positive integers. Then there are integers and such that where . We say that is the quotient and is the remainder. For example, if and , then .  Polynomials satisfy a similar property also called the Division Algorithm as given in the following proposition.   The Division Algorithm   If and are polynomials, then there are unique polynomials and such that where .      Rather than proving the Division Algorithm for polynomials, we will illustrate with an example. Suppose that and .  To get started, let's consider the highest degree terms in both polynomials. For , it is while for , it is . We'd like to multiply by something to get close to . Since the ratio of the highest degree terms is , we multiply by , which gives .  Now we ask what we should multiply by to realize the term. Since the highest degree term of is , we multiply by . This means that . Since the highest degree term of is , there is nothing we can multiply by to realize the highest degree term of the right hand side. This means that we have so the quotient is and the remainder is .  This algorithm is sometimes called synthetic division and is sometimes taught in high school. We won't be actually be implementing this algorithm, but this example is meant to illustrate why is true. Implementing this algorithm for general polynomials will give a proof of the Division Algorithm.    One important implication of the Division Algorithm is the following fact that we will use quite a bit. Remember that a root of a polynomial is a value for which .   If is a root of the polynomial , then for some polynomial .   The Division Algorithm tells us that . In the notation of the Division Algorithm, and . Therefore , which means that is a constant .  Now we know that , which says that . Therefore, we have .    This proposition shows that there is a relationship between the factors of a polynomial and its roots. Polynomials with complex coefficients are special because the Fundamental Theorem of Algebra tells us that every such polynomial has a root. The proof of this theorem is outside the scope of our course, but students often see it in a course in complex analysis.   Fundamental Theorem of Algebra   If is a degree polynomial having complex coefficients, then there are roots, , possibly with repitition. This means that .    While this important theorem only holds for polynomials with complex coefficients, we can deduce something about polynomials with real coefficients. For instance, if is a polynomial with real coefficients and is a complex root, then so is its complex conjugate . This follows because . We have where and . Since this quadratic polynomial does not have real roots, we know from the quadratic formula that . Therefore,    If is a polynomial with real coefficients, there are real roots such that .      The minimal polynomial of an operator  As mentioned in the introduction to this section, our interest in polynomials stems from the insights we gain when we evaluate a polynomial on an operator . For instance, if , then a new operator. Notice that we consider the constant term to be multiplied by the identify transformation .  Remember that the order in which we multiply polynomials is not important. In particular, . This leads to the following important proposition.    If is a polynomial and an operator, then both and are invariant subspaces under .    Suppose that is in , which means that . We need to explain why is also in . However, we have .  Similarly, if is in , then there is a vector so that . Then , which shows that is also in . Therefore, is an invariant subspace of .    We now come to a crucial result for our upcoming explorations. First, we need to make the following definition clear.   A monic polynomial is a polynomial where the coefficient of the highest degree term is .   For instance, is a monic polynomial, but is not.   The minimal polynomial of an operator   Suppose that is a finite-dimensional vector space over either or and that is an operator on . There is a unique monic polynomial of smallest degree such that . Moreover, . We call this polynomial the minimal polynomial of .    Our proof proceeds by induction on the dimension of . To begin, suppose that , which means that for some vector . Then for some , which is possibly . Then , which means that since spans . Therefore, if , we have .  We now imagine that and that the theorem has been verified for all operators on vector spaces of dimension less than . We choose a vector and consider the powers ; that is, consider the vectors . Since there are vector in this set and , we know this is a linearly independent set.  Choose to be the smallest integer such that is a linear combination of . This means two things. First, the vectors are linearly independent. Second, there are constants . If we define the degree monic polynomial , then . That is, is in .  Since is invariant under and is in , we know that are all in . These vectors are linearly independent so we know that . Therefore, .  For convenience, we will denote the vector space . Since is invariant under , is an operator on , whose dimension is less than . By the induction hypothesis, we know that there is a unique monic polynomial such that . Again by the induction hypothesis, it also follows that .  Now consider the polynomial whose degree is . Moreover, both and are monic so is also monic. Finally, for any vector in , we have where the last equality holds because is in and for any vector in . Since for every vector , this means that .  This shows that there is a monic polynomial such that on . Therefore, there is some possibly different polynomial having the smallest degree among all such polynomials, and this is the minimal polynomial of the operator on .  To see that this polynomial is unique, suppose there are two monic polynomials and having smallest degree and and . If we consider , we see that since the highest degree terms of and have coefficients and therefore cancel. Also, . However, this is impossible since and had the smallest possible degree among all polynomials that vanish when evaluated on . This means that , which guarantees the uniqueness of the minimal polynomial.      Consider the matrix and the linear operator that it defines. Notice that so if , then . The minimal polynomial of is therefore .  More generally, suppose that the minimal polynomial of an operator has degree . Since the minimal polynomial is monic, this means that . Because , we see that , a multiple of the identity.      By contrast, consider the matrix and the linear operator that it defines with respect to some basis. The degree of the minimal polynomial must be at least 2 since is not a multiple of the identity matrix. Notice, however, that and . This says that and so the minimal polynomial of is .    Both of the matrices in the two previous examples are upper triangular. Remembering that the eigenvalues of an upper triangular matrix are the entries on the diagonal, we see that the roots of the minimal polynomials in both cases are the eigenvalues of the operator. This gives some indication of the importance of the minimal polynomial, as we will see now.  The fact that the minimal polynomial has the smallest degree among all polynomials for which has some important consequences.    The set of roots of the minimal polynomial of equals the set of eigenvalues of .    Suppose that is the minimal polynomial of . We need to explain two things: that any eigenvalue of is a root of and that any root of is an eigenvalue of .  Suppose that is an eigenvalue of . This means that there is a nonzero vector such that and therefore for every . This means that , which implies that . Therefore, is a root of , the minimal polynomial of .  Conversely, suppose that is a root of . By , this means that . This says that However, since , there is some vector for which . Therefore, , which shows that is an eigenvector with associated eigenvalue .    This is the most significant fact about the minimal polynomial: that its roots are the eigenvalues of the operator. We'll put this to use in the next section. Before that, however, here are two other useful facts.    If is a polynomial for which , then is a multiple of the minimal polynomial of .    If is the minimal polynomial of , then we can apply the Division Algorithm to write where . Furthermore, , which implies that . Since has the smallest degree among all polynomials that vanish when evaluated on and has a smaller degree than , we know that . Therefore, .      If is an operator on the vector space and is a subspace of that is invariant under , then the minimal polynomial of is a multiple of the minimal polynomial of .    Suppose that is the minimal polynomial of and is the minimal polynomial of on . This means that for every vector in and so . We also know that is the minimal polynomial of so by , we know that is a multiple of .     "
},
{
  "id": "prop-poly-division",
  "level": "2",
  "url": "sec-polys.html#prop-poly-division",
  "type": "Proposition",
  "number": "2.1.1",
  "title": "The Division Algorithm.",
  "body": " The Division Algorithm   If and are polynomials, then there are unique polynomials and such that where .   "
},
{
  "id": "sec-polys-3-8",
  "level": "2",
  "url": "sec-polys.html#sec-polys-3-8",
  "type": "Example",
  "number": "2.1.2",
  "title": "",
  "body": "  Rather than proving the Division Algorithm for polynomials, we will illustrate with an example. Suppose that and .  To get started, let's consider the highest degree terms in both polynomials. For , it is while for , it is . We'd like to multiply by something to get close to . Since the ratio of the highest degree terms is , we multiply by , which gives .  Now we ask what we should multiply by to realize the term. Since the highest degree term of is , we multiply by . This means that . Since the highest degree term of is , there is nothing we can multiply by to realize the highest degree term of the right hand side. This means that we have so the quotient is and the remainder is .  This algorithm is sometimes called synthetic division and is sometimes taught in high school. We won't be actually be implementing this algorithm, but this example is meant to illustrate why is true. Implementing this algorithm for general polynomials will give a proof of the Division Algorithm.   "
},
{
  "id": "prop-root-factor",
  "level": "2",
  "url": "sec-polys.html#prop-root-factor",
  "type": "Proposition",
  "number": "2.1.3",
  "title": "",
  "body": " If is a root of the polynomial , then for some polynomial .   The Division Algorithm tells us that . In the notation of the Division Algorithm, and . Therefore , which means that is a constant .  Now we know that , which says that . Therefore, we have .   "
},
{
  "id": "thm-fta",
  "level": "2",
  "url": "sec-polys.html#thm-fta",
  "type": "Theorem",
  "number": "2.1.4",
  "title": "Fundamental Theorem of Algebra.",
  "body": " Fundamental Theorem of Algebra   If is a degree polynomial having complex coefficients, then there are roots, , possibly with repitition. This means that .   "
},
{
  "id": "sec-polys-3-14",
  "level": "2",
  "url": "sec-polys.html#sec-polys-3-14",
  "type": "Proposition",
  "number": "2.1.5",
  "title": "",
  "body": "  If is a polynomial with real coefficients, there are real roots such that .   "
},
{
  "id": "sec-polys-4-4",
  "level": "2",
  "url": "sec-polys.html#sec-polys-4-4",
  "type": "Proposition",
  "number": "2.1.6",
  "title": "",
  "body": "  If is a polynomial and an operator, then both and are invariant subspaces under .    Suppose that is in , which means that . We need to explain why is also in . However, we have .  Similarly, if is in , then there is a vector so that . Then , which shows that is also in . Therefore, is an invariant subspace of .   "
},
{
  "id": "sec-polys-4-6",
  "level": "2",
  "url": "sec-polys.html#sec-polys-4-6",
  "type": "Definition",
  "number": "2.1.7",
  "title": "",
  "body": " A monic polynomial is a polynomial where the coefficient of the highest degree term is .  "
},
{
  "id": "thm-minimal-polynomial",
  "level": "2",
  "url": "sec-polys.html#thm-minimal-polynomial",
  "type": "Theorem",
  "number": "2.1.8",
  "title": "The minimal polynomial of an operator.",
  "body": " The minimal polynomial of an operator   Suppose that is a finite-dimensional vector space over either or and that is an operator on . There is a unique monic polynomial of smallest degree such that . Moreover, . We call this polynomial the minimal polynomial of .    Our proof proceeds by induction on the dimension of . To begin, suppose that , which means that for some vector . Then for some , which is possibly . Then , which means that since spans . Therefore, if , we have .  We now imagine that and that the theorem has been verified for all operators on vector spaces of dimension less than . We choose a vector and consider the powers ; that is, consider the vectors . Since there are vector in this set and , we know this is a linearly independent set.  Choose to be the smallest integer such that is a linear combination of . This means two things. First, the vectors are linearly independent. Second, there are constants . If we define the degree monic polynomial , then . That is, is in .  Since is invariant under and is in , we know that are all in . These vectors are linearly independent so we know that . Therefore, .  For convenience, we will denote the vector space . Since is invariant under , is an operator on , whose dimension is less than . By the induction hypothesis, we know that there is a unique monic polynomial such that . Again by the induction hypothesis, it also follows that .  Now consider the polynomial whose degree is . Moreover, both and are monic so is also monic. Finally, for any vector in , we have where the last equality holds because is in and for any vector in . Since for every vector , this means that .  This shows that there is a monic polynomial such that on . Therefore, there is some possibly different polynomial having the smallest degree among all such polynomials, and this is the minimal polynomial of the operator on .  To see that this polynomial is unique, suppose there are two monic polynomials and having smallest degree and and . If we consider , we see that since the highest degree terms of and have coefficients and therefore cancel. Also, . However, this is impossible since and had the smallest possible degree among all polynomials that vanish when evaluated on . This means that , which guarantees the uniqueness of the minimal polynomial.   "
},
{
  "id": "example-min-poly-1",
  "level": "2",
  "url": "sec-polys.html#example-min-poly-1",
  "type": "Example",
  "number": "2.1.9",
  "title": "",
  "body": "  Consider the matrix and the linear operator that it defines. Notice that so if , then . The minimal polynomial of is therefore .  More generally, suppose that the minimal polynomial of an operator has degree . Since the minimal polynomial is monic, this means that . Because , we see that , a multiple of the identity.   "
},
{
  "id": "example-min-poly-2",
  "level": "2",
  "url": "sec-polys.html#example-min-poly-2",
  "type": "Example",
  "number": "2.1.10",
  "title": "",
  "body": "  By contrast, consider the matrix and the linear operator that it defines with respect to some basis. The degree of the minimal polynomial must be at least 2 since is not a multiple of the identity matrix. Notice, however, that and . This says that and so the minimal polynomial of is .   "
},
{
  "id": "prop-min-poly-roots",
  "level": "2",
  "url": "sec-polys.html#prop-min-poly-roots",
  "type": "Proposition",
  "number": "2.1.11",
  "title": "",
  "body": "  The set of roots of the minimal polynomial of equals the set of eigenvalues of .    Suppose that is the minimal polynomial of . We need to explain two things: that any eigenvalue of is a root of and that any root of is an eigenvalue of .  Suppose that is an eigenvalue of . This means that there is a nonzero vector such that and therefore for every . This means that , which implies that . Therefore, is a root of , the minimal polynomial of .  Conversely, suppose that is a root of . By , this means that . This says that However, since , there is some vector for which . Therefore, , which shows that is an eigenvector with associated eigenvalue .   "
},
{
  "id": "prop-min-poly-div",
  "level": "2",
  "url": "sec-polys.html#prop-min-poly-div",
  "type": "Proposition",
  "number": "2.1.12",
  "title": "",
  "body": "  If is a polynomial for which , then is a multiple of the minimal polynomial of .    If is the minimal polynomial of , then we can apply the Division Algorithm to write where . Furthermore, , which implies that . Since has the smallest degree among all polynomials that vanish when evaluated on and has a smaller degree than , we know that . Therefore, .   "
},
{
  "id": "prop-min-poly-subspace",
  "level": "2",
  "url": "sec-polys.html#prop-min-poly-subspace",
  "type": "Proposition",
  "number": "2.1.13",
  "title": "",
  "body": "  If is an operator on the vector space and is a subspace of that is invariant under , then the minimal polynomial of is a multiple of the minimal polynomial of .    Suppose that is the minimal polynomial of and is the minimal polynomial of on . This means that for every vector in and so . We also know that is the minimal polynomial of so by , we know that is a multiple of .   "
},
{
  "id": "sec-upper",
  "level": "1",
  "url": "sec-upper.html",
  "type": "Section",
  "number": "2.2",
  "title": "Upper triangular matrices",
  "body": " Upper triangular matrices   In this section, we will use our understanding of the minimal polynomial to find some standard forms for matrices of operators. First, we will consider upper triangular matrices.    Upper triangular matrices  As we have seen in the past, upper triangular matrices have some simple properties. For one, the eigenvalues of the associated operator equal the diagonal elements of the matrix. We have also seen that linear systems formed by triangular matrices are relatively easy to solve. All told, they form a pleasant set of matrices.  Reember that an upper triangular matrix is one whose entries are zero below the diagonal; that is, they have a form like this: . Suppose that is an operator and that there is a basis for which the associated matrix for is upper triangular. Since if , we have . In particular, this says that so that is an eigenvector with associated eigenvalue .  But tells us more. Notice that , which implies that is invariant under .  More generally, , which says that, for every , is invariant under .  Let's record this as a proposition.    Suppose that is an operator on the vector space . Then there is a basis for in which the associated matrix of is upper triangular if and only if is invariant under for each .    The discussion above explains why an operator with an upper triangular matrix forms invariant subspaces. Conversely, suppose that is invariant for every . The matrix associated to satisfies , which shows that if and that is therefore upper triangular.    We can rephrase this in terms of polynomials.    Suppose that is an operator on and that there is a basis of such that the matrix of is upper triangular. Then .    We will use to denote the polynomial .  First consider . Since is upper triangular, we know that , which means that . Therefore, .  Next consider for . Rearranging gives . Therefore, , which tells us that .  Continuing in this way, we see that and hence that . This means that for every vector and so we know that as claimed.    This leads to the following crucial result.    Suppose that is an operator on over the field . There is a basis for for which the matrix of is upper triangular if and only if the minimal polynomial of has the form where the roots are in .    One direction is a natural consequence of . Suppose that there is a basis for which the matrix of is upper triangular. That proposition tells us that for . Since , we know that is a multiple of the minimal polynomial of , which says that the minimal polynomial has the form given in the statement of this theorem.  Now suppose that the minimal polynomial has the form given. We will prove by induction that there is a basis for the matrix of is upper triangular.  First suppose that so that . This means that so that the matrix of in any basis is diagonal and hence upper triangular.  Let's now suppose that the result is true for any operator and vector space for which the minimal polynomial has the form where . Consider the subspace , which we know is invariant under . Since any vector in has the form , we know that . Therefore, if , then . As a result, is a multiple of the minimal polynomial of and so the minimal polynomial of is a product of fewer than terms having the form . By the induction hypothesis, we know there is a basis for so that the basis of is upper triangular.  We will now extend the basis of by vectors . Since is in , we have or , which shows that the matrix of is upper triangular.    Notice that the tells us that any polynomial with complex coefficients has the form given in . As a result, any operator on a complex vector space has a basis for which the associated matrix is upper triangular.   "
},
{
  "id": "prop-upper-invariant",
  "level": "2",
  "url": "sec-upper.html#prop-upper-invariant",
  "type": "Proposition",
  "number": "2.2.1",
  "title": "",
  "body": "  Suppose that is an operator on the vector space . Then there is a basis for in which the associated matrix of is upper triangular if and only if is invariant under for each .    The discussion above explains why an operator with an upper triangular matrix forms invariant subspaces. Conversely, suppose that is invariant for every . The matrix associated to satisfies , which shows that if and that is therefore upper triangular.   "
},
{
  "id": "prop-upper-min",
  "level": "2",
  "url": "sec-upper.html#prop-upper-min",
  "type": "Proposition",
  "number": "2.2.2",
  "title": "",
  "body": "  Suppose that is an operator on and that there is a basis of such that the matrix of is upper triangular. Then .    We will use to denote the polynomial .  First consider . Since is upper triangular, we know that , which means that . Therefore, .  Next consider for . Rearranging gives . Therefore, , which tells us that .  Continuing in this way, we see that and hence that . This means that for every vector and so we know that as claimed.   "
},
{
  "id": "thm-upper-minimal",
  "level": "2",
  "url": "sec-upper.html#thm-upper-minimal",
  "type": "Theorem",
  "number": "2.2.3",
  "title": "",
  "body": "  Suppose that is an operator on over the field . There is a basis for for which the matrix of is upper triangular if and only if the minimal polynomial of has the form where the roots are in .    One direction is a natural consequence of . Suppose that there is a basis for which the matrix of is upper triangular. That proposition tells us that for . Since , we know that is a multiple of the minimal polynomial of , which says that the minimal polynomial has the form given in the statement of this theorem.  Now suppose that the minimal polynomial has the form given. We will prove by induction that there is a basis for the matrix of is upper triangular.  First suppose that so that . This means that so that the matrix of in any basis is diagonal and hence upper triangular.  Let's now suppose that the result is true for any operator and vector space for which the minimal polynomial has the form where . Consider the subspace , which we know is invariant under . Since any vector in has the form , we know that . Therefore, if , then . As a result, is a multiple of the minimal polynomial of and so the minimal polynomial of is a product of fewer than terms having the form . By the induction hypothesis, we know there is a basis for so that the basis of is upper triangular.  We will now extend the basis of by vectors . Since is in , we have or , which shows that the matrix of is upper triangular.   "
},
{
  "id": "sec-orthogonal",
  "level": "1",
  "url": "sec-orthogonal.html",
  "type": "Section",
  "number": "2.3",
  "title": "Orthogonaliaty",
  "body": " Orthogonaliaty   As we've seen in our earlier studies, the dot product and orthogonality lead to many simplifications. For instance, the inverse of a matrix whose columns form an orthonormal basis of is just the transpose of that matrix. Since we are now looking to find bases that represent a given linear transformation with a simple form, it makes sense to start to consider orthogonal bases.    The adjoint of an operator  We suppose now that is a vector space over either or having an inner product denoted by . If is an operator on , we can define its adjoint through the following relationship for every and in . Notice that this also means that . The first thing to establish is that is itself an operator.   The adjoint is an operator on .   We first need to establish that is a vector in for every in .  Beginning with an orthonormal basis for , we have for all vectors . We then define , which gives a definition of the vector .   Finally, we need to show that satisfies the two linearity properties. Suppose that and are vectors in . Then . Since this holds for any vector , we have .  In the same way, we see that , which verifies that is an operator on .    We now investigate the matrices associated to and with respect to an orthonormal basis of . As before, we use to denote an orthonormal basis of .    If is the matrix associated to , then , the matrix associated to is , the conjugate transpose of .    Remember how the matrix is defined: , which says that if is the matrix defined by .      Self-adjoint operators  We that is a self-adjoint operator if . Notice that if is a real vector space, this means that the matrix associated to with respect to an orthonormal basis is symmetric. Here is a useful fact about self-adjoint operators.    If is a self-adjoint operator on and and are real numbers for which , then the operator is invertible.    We only need to show that . Therefore, we suppose that is a nonzero vector and consider . This shows that is also nonzero so the operator is invertible.    If and is an operator on , we know from the that the minimal polynomial of has the form where each .  Now suppose that and is a self-adjoint operator on . We can make a similar conclusion.    If is a real inner produce space and is a self-adjoint operator on , then the minimal polynomial of has the form where .    We know that the minimal polynomial has the form where for each . However, since , we know that . If , then is invertible by . If we multiply by its inverse, we obtain another polynomial of smaller degree for which .  Since the minimal polynomial is the polynomial having the smallest degree among all polynomials for which , we conclude that and therefore .     The Spectral Theorem   If is a self-adjoint operator on a vector space , then there is an orthonormal basis such that the matrix associated to is diagonal.    By and , we know that there is a basis of for which the matrix associated to is upper triangular.  If we let , we know that is invariant under . We now apply the Gram-Schmidt algorithm to this basis to produce an orthonormal basis for . By the Gram-Schmidt algorithm, we know that , which says that is an orthonormal basis for for which the matrix associated to is upper triangular.  However, if is this matrix, we know that is the matrix associated to . Since , we have , which says that is diagonal    Notice that we have given a number of proofs that all the eigenvalues of are real. This also shows that the eigenspaces associated with different eigenvalues are orthogonal to one another.   "
},
{
  "id": "sec-orthogonal-3-3",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-3-3",
  "type": "Proposition",
  "number": "2.3.1",
  "title": "",
  "body": " The adjoint is an operator on .   We first need to establish that is a vector in for every in .  Beginning with an orthonormal basis for , we have for all vectors . We then define , which gives a definition of the vector .   Finally, we need to show that satisfies the two linearity properties. Suppose that and are vectors in . Then . Since this holds for any vector , we have .  In the same way, we see that , which verifies that is an operator on .   "
},
{
  "id": "sec-orthogonal-3-5",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-3-5",
  "type": "Proposition",
  "number": "2.3.2",
  "title": "",
  "body": "  If is the matrix associated to , then , the matrix associated to is , the conjugate transpose of .    Remember how the matrix is defined: , which says that if is the matrix defined by .   "
},
{
  "id": "lemma-self-ad-quadratic",
  "level": "2",
  "url": "sec-orthogonal.html#lemma-self-ad-quadratic",
  "type": "Lemma",
  "number": "2.3.3",
  "title": "",
  "body": "  If is a self-adjoint operator on and and are real numbers for which , then the operator is invertible.    We only need to show that . Therefore, we suppose that is a nonzero vector and consider . This shows that is also nonzero so the operator is invertible.   "
},
{
  "id": "prop-self-ad-min-poly",
  "level": "2",
  "url": "sec-orthogonal.html#prop-self-ad-min-poly",
  "type": "Proposition",
  "number": "2.3.4",
  "title": "",
  "body": "  If is a real inner produce space and is a self-adjoint operator on , then the minimal polynomial of has the form where .    We know that the minimal polynomial has the form where for each . However, since , we know that . If , then is invertible by . If we multiply by its inverse, we obtain another polynomial of smaller degree for which .  Since the minimal polynomial is the polynomial having the smallest degree among all polynomials for which , we conclude that and therefore .   "
},
{
  "id": "thm-spectral-thm",
  "level": "2",
  "url": "sec-orthogonal.html#thm-spectral-thm",
  "type": "Theorem",
  "number": "2.3.5",
  "title": "The Spectral Theorem.",
  "body": " The Spectral Theorem   If is a self-adjoint operator on a vector space , then there is an orthonormal basis such that the matrix associated to is diagonal.    By and , we know that there is a basis of for which the matrix associated to is upper triangular.  If we let , we know that is invariant under . We now apply the Gram-Schmidt algorithm to this basis to produce an orthonormal basis for . By the Gram-Schmidt algorithm, we know that , which says that is an orthonormal basis for for which the matrix associated to is upper triangular.  However, if is this matrix, we know that is the matrix associated to . Since , we have , which says that is diagonal   "
},
{
  "id": "sec-nilpotent",
  "level": "1",
  "url": "sec-nilpotent.html",
  "type": "Section",
  "number": "2.4",
  "title": "Nilpotent operators",
  "body": " Nilpotent operators   Eigenvectors of an operator are found through the equation . Now that we have developed some conditions under which operators are diagonalizable, we would like to understand what happens when operators are not diagonalizable. To this end, we will generalize the eigenvector condition by considering . To get started, however, we will first consider a related class of operators.    Null spaces of powers  Suppose that is an operator. If , then it also happens that . This means that , and we therefore have .  The next propositions say that this process stabilizes so that the inclusions eventually become equalities. First we show that when we reach an equality, then all the following are inclusions.   If , then for any .   We will proof this fact using induction on . Notice that the result is true for by the assumption.  We now assume that for every and that we have a vector . We need to show that .  We know that . Therefore, is in , which means that . This means that by induction.    The next result says that this process will always stablize by the time we reach the dimension of .    For any operator on a vector space of dimension , .    If , then is invertible as is every power of . Therefore for every power, including and .  Now suppose that has positive dimension so that and that the null spaces continue to grow . In this case, . This shows that the null spaces cannot grow beyond so we have .      Nilpotent operators  We will say that an operator is nilpotent if some power of the operator is zero.   Nilpotent operator  An operator is nilpotent if some power .   Notice that the operator is nilpotent but we will often consider nonzero nilpotent operators.   Consider the matrix and notice that . An operator whose associated matrix is with respect to some basis is nilpotent since .   Suppose is nilpotent and that is the smallest power for which . This means that if and hence is the minimal polynomial of . We could view , which says that there is a basis for which the matrix associated to is upper triangular .  In fact, we will see that there is a basis so that the matrix associated to a nilpotent operator has an especially nice form.    A nilpotent block matrix is a matrix having the form . This is, all the entries are zero except for the entries directly above the diagonal, which are 1.     The following matrix consists of three nilpotent blocks on the diagonal, a block, a block, and a block. .   In fact, every nilpotent operator has basis whose associated matrix consists of a set of nilpotent blocks on the diagonal.    If is a nilpotent operator on , then there is a basis for such that the matrix associated to has the form where each is a nilpotent block.    We will prove this result using induction on . To begin, if , then so the matrix associated to in any basis is , a nilpotent block.  Now suppose that the result is true for every dimension less than and suppose that is the smallest integer for which but . If , then and the matrix associated to is the zero matrix, which is a collection of nilpotent blocks . Now suppose that and notice that our assumption implies that . Therefore, there is a vector such that but .  We define and note that but . Notice that the vectors form a linearly independent set. To see why, suppose we can find coefficients such that . If we apply to this vector, we have which says that . Continuing in this way, shows that each , which shows that the vectors are linearly independent. We define the -dimensional subspace to be the span of these vectors.  Notice that is invariant under and that the matrix associated to in this basis is an nilpotent block. If , then the matrix associated to in this basis is a single nilpotent block, and the conclusion of the theorem is true.  So now suppose that . We also know that so we have . Notice that is invariant under and that the matrix associated to in the basis is a nilpotent block. To finish the proof, we need to find a complement to inside that is invariant under .  To do so, we choose a linear functional satisfying and for . We use to define the linear transformation by . For a vector , we can write . Notice that so that . From this, we see that is surjective.  We define the subspace and note that since if is a nonzero vector in . Moreover, since is surjective. Therefore .  All that remains is to show that is invariant under . Suppose that . Then it follows that . Therefore, if , then , which says that is invariant under . Moreover, is still nilpotent so we know that the there is a basis for for which the matrix of consists of nilpotent blocks. Combining this basis with the basis of we have constructed gives a basis of for which the matrix associated to consists of nilpotent blocks.     "
},
{
  "id": "sec-nilpotent-3-4",
  "level": "2",
  "url": "sec-nilpotent.html#sec-nilpotent-3-4",
  "type": "Proposition",
  "number": "2.4.1",
  "title": "",
  "body": " If , then for any .   We will proof this fact using induction on . Notice that the result is true for by the assumption.  We now assume that for every and that we have a vector . We need to show that .  We know that . Therefore, is in , which means that . This means that by induction.   "
},
{
  "id": "sec-nilpotent-3-6",
  "level": "2",
  "url": "sec-nilpotent.html#sec-nilpotent-3-6",
  "type": "Proposition",
  "number": "2.4.2",
  "title": "",
  "body": "  For any operator on a vector space of dimension , .    If , then is invertible as is every power of . Therefore for every power, including and .  Now suppose that has positive dimension so that and that the null spaces continue to grow . In this case, . This shows that the null spaces cannot grow beyond so we have .   "
},
{
  "id": "sec-nilpotent-4-3",
  "level": "2",
  "url": "sec-nilpotent.html#sec-nilpotent-4-3",
  "type": "Definition",
  "number": "2.4.3",
  "title": "Nilpotent operator.",
  "body": " Nilpotent operator  An operator is nilpotent if some power .  "
},
{
  "id": "sec-nilpotent-4-5",
  "level": "2",
  "url": "sec-nilpotent.html#sec-nilpotent-4-5",
  "type": "Example",
  "number": "2.4.4",
  "title": "",
  "body": " Consider the matrix and notice that . An operator whose associated matrix is with respect to some basis is nilpotent since .  "
},
{
  "id": "sec-nilpotent-4-8",
  "level": "2",
  "url": "sec-nilpotent.html#sec-nilpotent-4-8",
  "type": "Definition",
  "number": "2.4.5",
  "title": "",
  "body": "  A nilpotent block matrix is a matrix having the form . This is, all the entries are zero except for the entries directly above the diagonal, which are 1.   "
},
{
  "id": "sec-nilpotent-4-9",
  "level": "2",
  "url": "sec-nilpotent.html#sec-nilpotent-4-9",
  "type": "Example",
  "number": "2.4.6",
  "title": "",
  "body": " The following matrix consists of three nilpotent blocks on the diagonal, a block, a block, and a block. .  "
},
{
  "id": "sec-nilpotent-4-11",
  "level": "2",
  "url": "sec-nilpotent.html#sec-nilpotent-4-11",
  "type": "Proposition",
  "number": "2.4.7",
  "title": "",
  "body": "  If is a nilpotent operator on , then there is a basis for such that the matrix associated to has the form where each is a nilpotent block.    We will prove this result using induction on . To begin, if , then so the matrix associated to in any basis is , a nilpotent block.  Now suppose that the result is true for every dimension less than and suppose that is the smallest integer for which but . If , then and the matrix associated to is the zero matrix, which is a collection of nilpotent blocks . Now suppose that and notice that our assumption implies that . Therefore, there is a vector such that but .  We define and note that but . Notice that the vectors form a linearly independent set. To see why, suppose we can find coefficients such that . If we apply to this vector, we have which says that . Continuing in this way, shows that each , which shows that the vectors are linearly independent. We define the -dimensional subspace to be the span of these vectors.  Notice that is invariant under and that the matrix associated to in this basis is an nilpotent block. If , then the matrix associated to in this basis is a single nilpotent block, and the conclusion of the theorem is true.  So now suppose that . We also know that so we have . Notice that is invariant under and that the matrix associated to in the basis is a nilpotent block. To finish the proof, we need to find a complement to inside that is invariant under .  To do so, we choose a linear functional satisfying and for . We use to define the linear transformation by . For a vector , we can write . Notice that so that . From this, we see that is surjective.  We define the subspace and note that since if is a nonzero vector in . Moreover, since is surjective. Therefore .  All that remains is to show that is invariant under . Suppose that . Then it follows that . Therefore, if , then , which says that is invariant under . Moreover, is still nilpotent so we know that the there is a basis for for which the matrix of consists of nilpotent blocks. Combining this basis with the basis of we have constructed gives a basis of for which the matrix associated to consists of nilpotent blocks.   "
},
{
  "id": "sec-jordan",
  "level": "1",
  "url": "sec-jordan.html",
  "type": "Section",
  "number": "2.5",
  "title": "Generalized eigenvectors",
  "body": " Generalized eigenvectors   Up to this point, eigenvalues and eigenvectors have helped us find some standard forms of operators. In particular, we have seen that if an operator on , an -dimensional vector space has linearly independent eigenvectors, then is diagonalizable. We also know that this condition holds if has distinct eigenvalues or if the operator is self-adjoint.  However, there are examples where this does not apply. For instance, the matrix has a single eigenvalue and the associated eigenspace is one-dimensional. In this case, the characteristic polynomial is so the eigenvalue is a root with multiplicity two.  This example show that just looking at eigenvalues and eigenvectors will not be enough to always find a standard form. So instead, we do something that mathematicians love to do: generalize an idea that has already proven useful. In this case, the eigenvalue\/eigenvector condition is given by the equation . We will generalize this equation to for some and call the solutions generalized eigenvectors .    Generalized eigenvectors    If is an operator on , we say that a nonzero vector is a generalized eigenvector if for some . The set of such vectors, the generalized eigenspace is denoted .    Notice that eigenvectors are also generalized eigenvectors.  First notice that is an invariant subspace of because for a polynomial . Moreover, the minimal polynomial of is . Since the minimal polynomial of divides the minimal polynomial of , we know that divides minimal polynomial of . This means that is an eigenvalue of . So while we have generalized the notion of eigenvector, the values of for which we have generalized eigenvectors and still eigenvalues of .    A nonzero vector cannot belong to generalized eigenspaces corresponding to two different eigenvalues.    Suppose that and are eigenvalues and that for some . Suppose also that for some other . Then . For this vector , there is a smallest value of such that , but . We therefore multiply both sides of the previous expression by so that , which says that .    Moreover, a set of nonzero vectors for a different set of eigenvalues is linearly independent.    A set of generalized eigenvectors, each associated to a different eigenvalue, is linearly independent.    Suppose that is a set of generalized eigenvectors associated to different eigenvalues. We will proceed using induction on the number of vectors in the set. If , we know that implies that .  Now suppose that and that the result is true for all smaller values of . Suppose that and that . Multiply by so that the last term on the left size becomes zero. Then we have . Since a generalized eigenvector can only be associated to one eigenvalue, each vector is nonzero. In addition, each of these vectors is still a generalized eigenvector because .  Therefore we have a linear combination of generalized eigenvectors with . By induction , which also implies that . The original set of generalized eigenvectors is then seen to be linearly independent.      Complex Vector Spaces  Because of the Fundamental Theorem of Algebra, operators on complex vector spaces have special properties. In the rest of this section, we will focus on complex vector spaces.    If is an operator on , a complex vector space, then there is a basis of consisting of generalized eigenvectors of .    Once again we proceed by induction on , the dimension of . The result is certainly true if because every nonzero vector is an eigenvector of .  Now assume that and that the result holds for all smaller values of . Suppose that is an eigenvalue of and consider the operator . We will first explain why .  First, we can see that these subspaces of intersect only in the zero vector. Suppose that , which means there is a vector such that . If is also in , then . Because , remember that for any positive . Since , we also have , which means that . Therefore, these two subspaces only intersect in the zero vector.  In the usual way, the dimensions of these subspaces add to so we have . If , then every vector in is a generalized eigenvector of and the conclusion of the theorem holds. Suppose instead that where the first inclusion holds because is an eigenvalue of . This means that .  Now is invariant under . By induction, there is a basis of consisting of generalized eigenvectors of . Putting this together with a basis of gives a basis of consisting of generalized eigenvectors of .      If is an operator on the complex vector space and the set of eigenvalues of is , then .    We have seen that there is a basis of consisting of generalized eigenvectors. Therefore, every vector in can be written as a linear combination of generalized eigenvectors.  We have further seen a set of generalized eigenvectors associated to different eigenvalues is linear independent.  These two facts are enough to establish the theorem.      Jordan form  We are now ready to proof the main structure theorem, again assuming that is a complex vector space. By a Jordan block, we mean a matrix whose diagonal entries are all , whose entries directly above the diagonal are 1, and whose other entries are all zero. That is, .   Jordan canonical form   If is an operator on a complex vector space , then there is a basis for such that the matrix associated to consists only of Jordan blocks on the diagonal. That is, .    We know that . Moreover, on , the operator is nilpotent, which means there is a basis for such that the matrix associated to conists of nilpotent blocks. The matrix associated to therefore has consists of Jordan blocks. Because each generalized eigenspace is invariant under , the theorem holds.    Notice that the characteristic polynomial of , which can easily be found using this matrix, has the form where the multiplicity of each eigenvalue equals the dimension . We earlier called the algebraic multiplicity of the eigenvalue . Because the eigenspace , have therefore shown that the multiplicity of the eigenvalue is at least as large as the dimension of the eigenspace: .   "
},
{
  "id": "sec-jordan-3-2",
  "level": "2",
  "url": "sec-jordan.html#sec-jordan-3-2",
  "type": "Definition",
  "number": "2.5.1",
  "title": "",
  "body": "  If is an operator on , we say that a nonzero vector is a generalized eigenvector if for some . The set of such vectors, the generalized eigenspace is denoted .   "
},
{
  "id": "sec-jordan-3-5",
  "level": "2",
  "url": "sec-jordan.html#sec-jordan-3-5",
  "type": "Proposition",
  "number": "2.5.2",
  "title": "",
  "body": "  A nonzero vector cannot belong to generalized eigenspaces corresponding to two different eigenvalues.    Suppose that and are eigenvalues and that for some . Suppose also that for some other . Then . For this vector , there is a smallest value of such that , but . We therefore multiply both sides of the previous expression by so that , which says that .   "
},
{
  "id": "sec-jordan-3-7",
  "level": "2",
  "url": "sec-jordan.html#sec-jordan-3-7",
  "type": "Proposition",
  "number": "2.5.3",
  "title": "",
  "body": "  A set of generalized eigenvectors, each associated to a different eigenvalue, is linearly independent.    Suppose that is a set of generalized eigenvectors associated to different eigenvalues. We will proceed using induction on the number of vectors in the set. If , we know that implies that .  Now suppose that and that the result is true for all smaller values of . Suppose that and that . Multiply by so that the last term on the left size becomes zero. Then we have . Since a generalized eigenvector can only be associated to one eigenvalue, each vector is nonzero. In addition, each of these vectors is still a generalized eigenvector because .  Therefore we have a linear combination of generalized eigenvectors with . By induction , which also implies that . The original set of generalized eigenvectors is then seen to be linearly independent.   "
},
{
  "id": "sec-jordan-4-3",
  "level": "2",
  "url": "sec-jordan.html#sec-jordan-4-3",
  "type": "Proposition",
  "number": "2.5.4",
  "title": "",
  "body": "  If is an operator on , a complex vector space, then there is a basis of consisting of generalized eigenvectors of .    Once again we proceed by induction on , the dimension of . The result is certainly true if because every nonzero vector is an eigenvector of .  Now assume that and that the result holds for all smaller values of . Suppose that is an eigenvalue of and consider the operator . We will first explain why .  First, we can see that these subspaces of intersect only in the zero vector. Suppose that , which means there is a vector such that . If is also in , then . Because , remember that for any positive . Since , we also have , which means that . Therefore, these two subspaces only intersect in the zero vector.  In the usual way, the dimensions of these subspaces add to so we have . If , then every vector in is a generalized eigenvector of and the conclusion of the theorem holds. Suppose instead that where the first inclusion holds because is an eigenvalue of . This means that .  Now is invariant under . By induction, there is a basis of consisting of generalized eigenvectors of . Putting this together with a basis of gives a basis of consisting of generalized eigenvectors of .   "
},
{
  "id": "sec-jordan-4-4",
  "level": "2",
  "url": "sec-jordan.html#sec-jordan-4-4",
  "type": "Proposition",
  "number": "2.5.5",
  "title": "",
  "body": "  If is an operator on the complex vector space and the set of eigenvalues of is , then .    We have seen that there is a basis of consisting of generalized eigenvectors. Therefore, every vector in can be written as a linear combination of generalized eigenvectors.  We have further seen a set of generalized eigenvectors associated to different eigenvalues is linear independent.  These two facts are enough to establish the theorem.   "
},
{
  "id": "sec-jordan-5-3",
  "level": "2",
  "url": "sec-jordan.html#sec-jordan-5-3",
  "type": "Theorem",
  "number": "2.5.6",
  "title": "Jordan canonical form.",
  "body": " Jordan canonical form   If is an operator on a complex vector space , then there is a basis for such that the matrix associated to consists only of Jordan blocks on the diagonal. That is, .    We know that . Moreover, on , the operator is nilpotent, which means there is a basis for such that the matrix associated to conists of nilpotent blocks. The matrix associated to therefore has consists of Jordan blocks. Because each generalized eigenspace is invariant under , the theorem holds.   "
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
