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
  "body": " Vector spaces   A vector space is simply a mathematical set on which we can perform addition and scalar multiplication. We already have some familiarity with vector spaces since is a good example. However, as mentioned in the introduction to this chapter, polynomials have similar operations so we would like to create a mathematical structure that allows us to study vectors and polynomials as equals. This is why the concept of a vector space is so useful.    Vector spaces  The usual place to get started would be with a general definition of a vector space. However, this is one place in mathematics, among others, where a general definition can obscure the underlying idea. For that reason, let's just start with some examples.   Matrices   Let's look at the set of all matrices, which include the matrices . As we saw in our earlier course, we can multiply a matrix by a scalar and we can add matrices: . Notice that both operations produce a new object that is also a matrix. We say that that the set is closed under these operations.  With these operations, the set of matrices becomes a vector space.    Notice that the entries in our matrices are real numbers . We could instead change the example so that we consider matrices whose entries are in the complex numbers .   Complex matrices   Consider now the set of matrices with complex entries. For example, . Scalar multiplication includes multiplication by complex numbers so we have .    These examples show that vector spaces have an underlying field , which is the set of scalars by which we can multiply. You may or may not know about fields depending on whether you have studied abstract algebra. In either case, the underlying field of our vector spaces will always be either the real numbers or the complex numbers, which we will write as or .  Having seen some examples, we offer a general definition of a vector space.   Vector space   A vector space over a field is a set with two operations, scalar multiplication by elements of and addition, under which is closed. Moreover, these operations satisfy the following natural properties:  Addition is commutative; that is for every pair of .  There is an additive identity; that is, there is an element such that for any element in .  Every element has an additive inverse such that . We will usually write the additive identity as .  Addition is associative, which means that we can regroup a sum in the following way: .  For every , we have .  Scalar multiplication is distributive in the sense that .      That is a long list of properties. Technically speaking, if we want to check that some set is a vector space, we need to check each one of those properties. In practice, however, we will know a vector space when we see one, and we will be fairly loose with these details.   Polynomials   If or , the set of polynomials whose coefficients are in form a vector space .     Polynomials of degree   Rather than the set of all polynomials, we define the set to be the set of all polynomials whose degree is or less. For example, contains all polynomials of degree two or less: where the coefficients are assumed to be either real or complex, as will be either specified or clear from the context.    Of course, the set of all polynomials is larger than the set of quadratic polynomials, and we have . We say that is a vector subspace of .   Vector subspace   A subset of a vector space is called a subspace of if is closed under the operations of scalar multiplication and addition that it inherits from .    Notice that a subspace is itself a vector space and that the underlying fields of and are the same.  Every vector space has two subspaces that we will frequently need to consider. Namely, the subspace consisting of only the zero vector and the entire vector space itself.   Function spaces   Let be the set of functions whose domain is and whose codomain is ; that is, functions of the form . It follows that is a complex vector space.    If we were to consider functions , we would obtain a real vector space. This is not a subspace of , however, since the underlying fields are different. Rather, here are some natural subspaces of .    The following are subspaces of :  The set of functions for which .  The set of periodic functions whose period is 7; that is functions that satisfy for all .  The set of continous functions.    The set of functions that satisfy is, however, not a subspace since it is not closed under scalar multiplication or vector addition.      If is a vector space and and are subspaces, then is also a subspace of as it can be seen that the interection is closed under scalar multiplication and addition.    When working with a vector space , we will frequently refer to the elements of as vectors even though they may be polynomials, matrices, functions, or even something entirely different.    Linear combinations  Our study of linear algebra really began once we introduced linear combinations. Of course, linear combinations are defined purely in terms of scalar multiplication and addition so we can form linear combinations of elements in a vector space.    Suppose that is a set of vectors in a vector space over a field . A linear combination of these vectors is a vector of the form where the scalars belong to the field .      Consider the vector space consisting of polynomials having degree two or less and the polynomials and . We can form the linear combination .    We can also think about concepts like span and linear independence.   Span   The span of a set of vectors in a vector space is the set of all linear combinations that can be formed from the set.    It's not hard to see that the span of a set of vectors in forms a subspace. We just have to check that the span is closed under scalar multiplication and addition. So we will consider vectors . If we multiply by the scalar , we have , which is in the span of the set of vectors. Similarly, , which is also in the span. This demonstrates the following proposition.    The span of a set of vectors in is a subspace of .    We can also define linear dependence as before.   Linear independence   A set of vectors in is linearly dependent if one of the vectors can be written as a linear combination of the others.      In , consider the polynomials . This set of polynomials is linear dependent because .  Notice that this also says that , which leads to the next proposition.      A set of vectors in a vector space is linearly dependent if and only if for some set of scalars with at least one being nonzero.  Equivalently, the set of vectors is linearly independent if and only if implies that all the scalars .    The second statement is logically equivalent to the first so our proof will focus on the first statement. Suppose that the set is linearly dependent and that is the first vector that is a linear combination of vectors that occur previously in the list. This means that there are scalars such that . We can rewrite this expression as , which means that there are scalars with .  Conversely, suppose that for some set of scalars and that be the last nonzero scalar. We can rewrite this expression as . This shows that is a linear combination of the other vectors and that the set of vectors is therefore linearly dependent.      Suppose that is a linear dependent set of vectors and that can be written as a linear combination of the other vectors. Removing from the set does not change the span; that is, .    If , then we can replace in this expression with a linear combination of the other vectors. This shows that can be written as a linear combination of the set of vectors with removed.      Bases    A set of vectors in a vector space forms a basis for is the set is linearly independent and its span is .      We can see that the polynomials form a basis of . Notice that this statement is true for both and .  First, every polynomial in can be written as , showing that , , and span . To see that these polynomials are linearly independent, suppose that , the additivity identiy in . We therefore have from which we conclude that , , and . Therefore, , , and are linearly indepedent by and hence form a basis for .      The polynomials form a basis of .  To see this, suppose that is a polynomial in . We wish to see that can be written as a linear combination of , , and . This means that there are scalars , , and such that This is a linear system of three equations in the three variables , , and , which may be written as , which has a unique solution for every vector . This says that and that these polynomials are linearly independent.      Consider the set of polynomials in . We claim that these polynomials form a basis for .  To see that they are linearly independent, we will suppose that they are linearly dependent and derive a contradiction. Suppose that and that some of the scalars are nonzero. Let be the last nonzero scalar so that . That is, is the only term involving . Therefore, , which contradicts our assumption that .  To see that these polynomials span , we offer a proof by induction. When , we see that spans . Now suppose that span and that is a polynomial in . Notice that the polynomials and have the same coefficient of . Therefore, is a polynomial in and can be written as a linear combination of . This means that       There is no finite set that forms a basis for , the set of all polynomials. Given any finite set, there is a polynomial having a highest degree . Therefore, the polynomial is not in the span of the set so it cannot be a basis.      We say that a vector space is finite dimensional if there is a finite set whose span is . Otherwise, we say that is infinite dimensional.    Notice that any finite dimensional vector space must have a basis.    Any finite dimensional vector space has a basis consisting of a finite number of vectors.    If is a finite dimensional vector space, there is a finite set of vectors whose span is . If this set of vectors is linearly independent, then it forms a basis. It not, we can remove one vector that is a linear combination of the others. says that the span of the remaining vectors is still so we continue removing vectors one at a time until we obtain a linearly independent set, which must be a basis.    Notice that the two bases for in and both consist of three polynomials. This is generally true as we will begin to explain. First, we will prove a more technical, but still useful, result.    The number of vectors in a linearly independent set in the vector space is no more than the number of vectors in any set whose span is .    Suppose that is a linear independent set in the vector space and that is a set whose span is . We wish to show that .  We first construct a new list whose span is . Because the span of the vectors is , is a linear combination of the vectors, which means that this set of vectors is linearly dependent. We let be the first vector in the list that is a linear combination of vectors that occur previously in the list. Since the set of vectors is linearly independent, is nonzero, which means that must be one of the vectors. If we remove , we have a new list whose span is by . Notice that the cardinality of this new list is .  We can repeat this process. We prepend to the list to obtain which must be linearly dependent. Let be the first vector in the list that is a linear combination of vectors that occur previously in the list. Once again, since the vectors form a linearly independent set, we know that is one of the vectors. We can remove to obtain a new list of vectors whose span is . Again, the cardinality of this new list is .  We continue this process until all the vectors have been added to the beginning of the list. At each step, the vector we remove is one of the vectors since the vectors are linearly independent. Therefore, we have a list of vectors that contains , which says that .      If is a finite dimensional vector space, then any two bases have the same number of vectors.    Suppose that is one basis and that is another. The set of vectors forms a linearly independent set and the set of vectors spans . By , we know that .  We can repeat this argument interchanging the two bases to conclude that . Put together, these two facts mean that .    If is a finite dimensional vector space, we define its dimension to be the number of vectors in a basis. In this case, the number of vectors in any basis is the same so this definition does not depend on which basis we choose.    If a vector space has a basis with vectors, we say that the dimension of is and write .    We may informally think of the dimension of a vector space as a measure of its size. Therefore, it should follow that the dimension of a subspace cannot be larger than the dimension of the vector space in which it resides. We first call attention to a useful fact.    If is a linearly independent subset of the vector space whose span is not , then there is a vector in such that is a linearly independent subset of .    Under the assumptions of this proposition, the span of is not so there is a vector that is not in the span of the vectors. This means that it is not a linear combination of the vectors and therefore is a linearly independent set.      If is a vector space whose dimension and is a linearly independent set in , then also spans and is therefore a basis of .    Any linear independent subset of can have no more than vectors by . If this linearly independent set of vectors does not span , then by , we can add a vector so that is a linearly independent subset of . This cannot happen, however, since this set would have vectors. Therefore, must span .      If is a subspace of the finite dimensional vector space , then is also a finite dimensional vector space and .    We will first explain why is a finite dimensional vector space, which means we need to explain why there is a finite set that spans . We begin with any set of vectors in . By , we can remove vectors one at a time until we obtain a linearly independent set in . If this set does not span , then we can add vectors in one at a time to obtain new linearly independent sets in . This process must stop at some point since any linearly independent set in can have no more than vectors. Therefore, we have obtained a finite set that spans , which says that is finite dimensional.  Since any basis for is also a linearly independent subset of , it can contain no more vectors than a basis of . This tells us that .      Any linearly independent set in a finite dimensional vector space can be extended to a basis for .    Suppose that is a linearly independent set in and that is a basis for . Join the two lists together to obtain . We are guaranteed that the span of this set is . If it is not a linear independent set, then we remove the first vector that is a linear combination of the others. Since the vectors are linearly independent, the vector that is removed must be one of the vectors. Continuing in this way, we eventually obtain a basis that includes the vectors .    The following is a consequence of .    If is a subspace of and , then .    Some further conseqences of these ideas follow.    If is a finite dimensional vector space of dimension and is a set of vectors in , then   if the set of vectors is linearly independent, then it is a basis.    if the span of the set of vectors is , then it is a basis.         "
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
  "id": "sec-vs-intro-5-7",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-7",
  "type": "Definition",
  "number": "1.1.23",
  "title": "",
  "body": "  We say that a vector space is finite dimensional if there is a finite set whose span is . Otherwise, we say that is infinite dimensional.   "
},
{
  "id": "sec-vs-intro-5-9",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-9",
  "type": "Proposition",
  "number": "1.1.24",
  "title": "",
  "body": "  Any finite dimensional vector space has a basis consisting of a finite number of vectors.    If is a finite dimensional vector space, there is a finite set of vectors whose span is . If this set of vectors is linearly independent, then it forms a basis. It not, we can remove one vector that is a linear combination of the others. says that the span of the remaining vectors is still so we continue removing vectors one at a time until we obtain a linearly independent set, which must be a basis.   "
},
{
  "id": "prop-lin-indep-num",
  "level": "2",
  "url": "sec-vs-intro.html#prop-lin-indep-num",
  "type": "Proposition",
  "number": "1.1.25",
  "title": "",
  "body": "  The number of vectors in a linearly independent set in the vector space is no more than the number of vectors in any set whose span is .    Suppose that is a linear independent set in the vector space and that is a set whose span is . We wish to show that .  We first construct a new list whose span is . Because the span of the vectors is , is a linear combination of the vectors, which means that this set of vectors is linearly dependent. We let be the first vector in the list that is a linear combination of vectors that occur previously in the list. Since the set of vectors is linearly independent, is nonzero, which means that must be one of the vectors. If we remove , we have a new list whose span is by . Notice that the cardinality of this new list is .  We can repeat this process. We prepend to the list to obtain which must be linearly dependent. Let be the first vector in the list that is a linear combination of vectors that occur previously in the list. Once again, since the vectors form a linearly independent set, we know that is one of the vectors. We can remove to obtain a new list of vectors whose span is . Again, the cardinality of this new list is .  We continue this process until all the vectors have been added to the beginning of the list. At each step, the vector we remove is one of the vectors since the vectors are linearly independent. Therefore, we have a list of vectors that contains , which says that .   "
},
{
  "id": "sec-vs-intro-5-12",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-12",
  "type": "Proposition",
  "number": "1.1.26",
  "title": "",
  "body": "  If is a finite dimensional vector space, then any two bases have the same number of vectors.    Suppose that is one basis and that is another. The set of vectors forms a linearly independent set and the set of vectors spans . By , we know that .  We can repeat this argument interchanging the two bases to conclude that . Put together, these two facts mean that .   "
},
{
  "id": "sec-vs-intro-5-14",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-14",
  "type": "Definition",
  "number": "1.1.27",
  "title": "",
  "body": "  If a vector space has a basis with vectors, we say that the dimension of is and write .   "
},
{
  "id": "prop-lin-indep-add",
  "level": "2",
  "url": "sec-vs-intro.html#prop-lin-indep-add",
  "type": "Proposition",
  "number": "1.1.28",
  "title": "",
  "body": "  If is a linearly independent subset of the vector space whose span is not , then there is a vector in such that is a linearly independent subset of .    Under the assumptions of this proposition, the span of is not so there is a vector that is not in the span of the vectors. This means that it is not a linear combination of the vectors and therefore is a linearly independent set.   "
},
{
  "id": "prop-lin-dep-full",
  "level": "2",
  "url": "sec-vs-intro.html#prop-lin-dep-full",
  "type": "Proposition",
  "number": "1.1.29",
  "title": "",
  "body": "  If is a vector space whose dimension and is a linearly independent set in , then also spans and is therefore a basis of .    Any linear independent subset of can have no more than vectors by . If this linearly independent set of vectors does not span , then by , we can add a vector so that is a linearly independent subset of . This cannot happen, however, since this set would have vectors. Therefore, must span .   "
},
{
  "id": "sec-vs-intro-5-18",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-18",
  "type": "Proposition",
  "number": "1.1.30",
  "title": "",
  "body": "  If is a subspace of the finite dimensional vector space , then is also a finite dimensional vector space and .    We will first explain why is a finite dimensional vector space, which means we need to explain why there is a finite set that spans . We begin with any set of vectors in . By , we can remove vectors one at a time until we obtain a linearly independent set in . If this set does not span , then we can add vectors in one at a time to obtain new linearly independent sets in . This process must stop at some point since any linearly independent set in can have no more than vectors. Therefore, we have obtained a finite set that spans , which says that is finite dimensional.  Since any basis for is also a linearly independent subset of , it can contain no more vectors than a basis of . This tells us that .   "
},
{
  "id": "prop-basis-extend",
  "level": "2",
  "url": "sec-vs-intro.html#prop-basis-extend",
  "type": "Proposition",
  "number": "1.1.31",
  "title": "",
  "body": "  Any linearly independent set in a finite dimensional vector space can be extended to a basis for .    Suppose that is a linearly independent set in and that is a basis for . Join the two lists together to obtain . We are guaranteed that the span of this set is . If it is not a linear independent set, then we remove the first vector that is a linear combination of the others. Since the vectors are linearly independent, the vector that is removed must be one of the vectors. Continuing in this way, we eventually obtain a basis that includes the vectors .   "
},
{
  "id": "sec-vs-intro-5-21",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-21",
  "type": "Proposition",
  "number": "1.1.32",
  "title": "",
  "body": "  If is a subspace of and , then .   "
},
{
  "id": "sec-vs-intro-5-23",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-23",
  "type": "Proposition",
  "number": "1.1.33",
  "title": "",
  "body": "  If is a finite dimensional vector space of dimension and is a set of vectors in , then   if the set of vectors is linearly independent, then it is a basis.    if the span of the set of vectors is , then it is a basis.      "
},
{
  "id": "sec-lt-intro",
  "level": "1",
  "url": "sec-lt-intro.html",
  "type": "Section",
  "number": "1.2",
  "title": "Linear transformations",
  "body": " Linear transformations   We earlier viewed an matrix as defining a matrix transformation by . Due to the linearity of matrix multiplication, this meant that . Now that we are working with vector spaces, we can define linear transformations, which are functions between vector spaces that satisfy these properties.    Linear transformations  Given two vector spaces, and , we can define a linear transformation between them by generalizing our earlier notion of matrix transformation.    If and are vector spaces, then a linear transformation is a function such that, for every scalar and pair of vectors , we have .      Suppose that . Then defined by is a linear transformation.  This follows because matrix multiplication is a linear operation:       Suppose that , the set of functions . Then is a linear transformation .  To see this, we need to remember how scalar multiplication and vector addition work in . If is a scalar and and are functions, then Therefore,       Suppose that and . If is a polynomial in , define the function where is the derivative of . Two common rules of differentiation, the constant multiplier rule and the addition rule, imply that is a linear transformation.      If and , then is a linear transformation.      Suppose that is the vector space of matrices. Then by is not a linear transformation because .      Given two vector spaces, and , the set of linear transformations will be denoted as .      Notation  While a linear transformation is a function, we will frequently write , without parentheses, when we mean . This is similar to how we often write rather than in other courses.     The null space and range  A linear transformation creates a subspace of and a subspace of .    If is a linear transformation, we define the null space and range of to be .    In our earlier linear algebra courses, we considered the null space and column space of a matrix. The null space and range of a linear transformation is the same concept generalized to vector spaces.    Suppose that is a matrix and consider the linear transformation . Then is the set of solutions to the equation , which is the same as the null space .  Similarly, the column space is the set of vectors for which is consistent. In other words, is in if and only if there is a vector such that . This is precisely the definition of .      Consider the linear transformation defined by the matrix . The null space is the set of vectors for which , which we see is the subspace of spanned by and .  Similarly, is the subspace of having a basis given by and .      Suppose that and and that where . A general polynomial in has the form so that . Therefore, is the set of polynomials for which so that . We also see that       If , then is a subspace of and is a subspace of .    Suppose that and are in . Then we have This shows that is closed under scalar multiplication and vector addition and is therefore a subspace of .  Now suppose the and are in . We know that there are vectors and in such that and . Therefore, This shows that is closed under scalar multiplication and vector addition so is a subspace of .    We will frequently make use of the next proposition.    If is a finite dimensional vector space and is a linear transformation, then .    Now suppose that is a basis for , which we extend to a basis for by adding vectors . We also define .  Given a vector in , we can write so that . This shows that span .  We also claim that forms a linearly independent set. Suppose that , which means that is in so that this vector is a linear combination of . This can only happen if the vector is zero, showing that and the vectors are linearly independent.  We conclude that is a basis for and we have .      Suppose . If , we say that is surjective . If , we say that is injective .    If is surjective, notice that every vector has a vector for which .  If is injective and , then since meaning .    Once again, these are familiar notions. Suppose that is an matrix that defines a linear transformation . Then is injective if . This happens when the columns of are linearly independent.  The transformation is surjective if , which happens when the columns of span .      The linear transformation defined by is injective but not surjective because the constant polynomials are not in .      A linear transformation is called an isomorphism if is both surjective and injective.    The following proposition follows immediately from .    If is surjective, then .  If is injective, then .  If is an isomorphism, then .      Vector space isomorphisms    Consider the linear transformation defined by . If , then . This shows that and . Therefore, is a vector space isomorphism.      If is a vector space, then defined by is a linear transformation called the identity transformation.    Suppose that is an isomorphism, then every vector in has a vector in such that . In fact, there is exactly once such vector since if , we know that because is injective. In this case, we can define a function where is the vector for which .  Notice that is a linear transformation. For instance, if , then , which says that . In the same way, we have .  Therefore, we have the following proposition.    If is an ismorphism, there is a linear transformation such that , the identity transformation on , and , the identity transformation on . We will typically denote as .      If is a finite dimensional vector space of dimension over the field , then there is an isomorphism .    We choose a basis and define . By the linear independence of the basis, we see that is injective. Since the span of the basis vectors is , we see that is surjective.    The term isomorphism means having the same shape or structure. In other words, isomorphic vector spaces have the same structure. In our earlier courses, we considered only the vector spaces . The previous proposition, , shows us that every finite dimensional real vector space has the same structure as . This means that, technically speaking, we were also studying finite dimensional real vector spaces at the same time.  Notice, however, that the isomorphism in depends on a choice of basis. If two people choose different bases, then they will produce different isomorphisms. In fact, as we move forward, some of our work will be motivated by choosing a basis that creates a particularly nice isomorphism. Our next discussion of matrices will lay that foundation.    Representing linear transformations with matrices  says that every finite dimensional vector space is essentially the same as . Therefore, we are able to represent elements in a vector space as more typical vectors in and linear transformations as matrices. Let us make this more clear now.  Suppose that we have a basis for a finite dimensional vector space . If is an element of , then we can uniquely write . As shorthand, we will write . This should be familiar from our earlier work when we used a basis of to form a new coordinate system.    Consider the vector space with the basis . Then we have . We may think of this as a coordinate system in the vector space of polynomials.    In a similar way, we can represent linear transformations using matrices. Suppose that is a linear transformation and that we have a basis for and a basis for . We then have , which defines an matrix . In the same way we denoted the coordinates of a vector in terms of a basis, we can denote the matrix of the linear transformation . Notice that meaning that the columns of are the coordinates : .  At first glance, this notation may seem a little intimidating, but it will become clear with a little practice.    If is a linear transformation, a basis for and a basis for , we say that the matrix is the matrix associated to with respect to these bases.      Consider where . If we choose the bases and , then .     The next proposition says that the composition of linear transformations corresponds to matrix multiplication.    If and are linear transformations and , , and are bases for , , and , respectively, then .    We denote the vectors in the bases by , , and , respectively. Similarly, we use the shorthand   We have , which implies that Therefore, , which says that as expected.    A similar result holds for the coordinate representations of vectors.    Suppose that is a linear transformation and is a basis for and is a basis for . If is a vector in , then .    An important example is when the linear transformation is the identity and we have two bases and for . In this case, . This matrix then represents the change of coordinates .    Suppose that and that and . Then This matrix converts the coordinate representation of a polynomials in the basis into the coordinate representation of the same polynomial in the basis.  The inverse of this matrix will convert the -coordinate representation of a polynomial into the -coordinate representation: .  Consider the polynomial . We then have and . This means that as is easily checked.    We will often be interested in linear transformations in which the codomain and the domain are the same vector space. Given a basis for , we can then represent in terms of this basis as where the same basis is used for the codomain and domain. The following shows how the matrices representing the same transformation are represented in two bases.    Suppose that is a linear transformation and that and are two bases for . Then .    Here is a simpler way to represent this statement. If , , and , then we have . This should remind you of the kind of expression we saw when we were diagonalizing matrices and gives some idea for where we are heading.    Two square matrices and are called similar if there is a matrix such that .    Notice that a matrix is diagonalizable precisely when it is similar to a diagonal matrix.    Similarity is an equivalence relation on the set of matrices.      Suppose that and are similar matrices. If is a basis for and , then for some other basis .    In other words, two similar matrices represent the same linear transformations in two different bases. This is why we should expect that similar matrices should share important properties, such as determinants, eigenvalues, and more.  We close this section by noting that the set of linear transformations is itself a vector space.    If and are two vector spaces, then is the set of linear transformations .      If and are two vector spaces, then is a vector space. Moreover, if is a finite basis for and is a finite basis for , then the function by is an isomorphism. It then follows that .      "
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
  "body": "  Suppose that . Then defined by is a linear transformation.  This follows because matrix multiplication is a linear operation:    "
},
{
  "id": "sec-lt-intro-3-5",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-3-5",
  "type": "Example",
  "number": "1.2.3",
  "title": "",
  "body": "  Suppose that , the set of functions . Then is a linear transformation .  To see this, we need to remember how scalar multiplication and vector addition work in . If is a scalar and and are functions, then Therefore,    "
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
  "id": "sec-lt-intro-4-3",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-3",
  "type": "Definition",
  "number": "1.2.8",
  "title": "",
  "body": "  If is a linear transformation, we define the null space and range of to be .   "
},
{
  "id": "sec-lt-intro-4-5",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-5",
  "type": "Example",
  "number": "1.2.9",
  "title": "",
  "body": "  Suppose that is a matrix and consider the linear transformation . Then is the set of solutions to the equation , which is the same as the null space .  Similarly, the column space is the set of vectors for which is consistent. In other words, is in if and only if there is a vector such that . This is precisely the definition of .   "
},
{
  "id": "sec-lt-intro-4-6",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-6",
  "type": "Example",
  "number": "1.2.10",
  "title": "",
  "body": "  Consider the linear transformation defined by the matrix . The null space is the set of vectors for which , which we see is the subspace of spanned by and .  Similarly, is the subspace of having a basis given by and .   "
},
{
  "id": "sec-lt-intro-4-7",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-7",
  "type": "Example",
  "number": "1.2.11",
  "title": "",
  "body": "  Suppose that and and that where . A general polynomial in has the form so that . Therefore, is the set of polynomials for which so that . We also see that    "
},
{
  "id": "sec-lt-intro-4-8",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-8",
  "type": "Proposition",
  "number": "1.2.12",
  "title": "",
  "body": "  If , then is a subspace of and is a subspace of .    Suppose that and are in . Then we have This shows that is closed under scalar multiplication and vector addition and is therefore a subspace of .  Now suppose the and are in . We know that there are vectors and in such that and . Therefore, This shows that is closed under scalar multiplication and vector addition so is a subspace of .   "
},
{
  "id": "prop-nul-range-dims",
  "level": "2",
  "url": "sec-lt-intro.html#prop-nul-range-dims",
  "type": "Proposition",
  "number": "1.2.13",
  "title": "",
  "body": "  If is a finite dimensional vector space and is a linear transformation, then .    Now suppose that is a basis for , which we extend to a basis for by adding vectors . We also define .  Given a vector in , we can write so that . This shows that span .  We also claim that forms a linearly independent set. Suppose that , which means that is in so that this vector is a linear combination of . This can only happen if the vector is zero, showing that and the vectors are linearly independent.  We conclude that is a basis for and we have .   "
},
{
  "id": "sec-lt-intro-4-11",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-11",
  "type": "Definition",
  "number": "1.2.14",
  "title": "",
  "body": "  Suppose . If , we say that is surjective . If , we say that is injective .   "
},
{
  "id": "sec-lt-intro-4-14",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-14",
  "type": "Example",
  "number": "1.2.15",
  "title": "",
  "body": "  Once again, these are familiar notions. Suppose that is an matrix that defines a linear transformation . Then is injective if . This happens when the columns of are linearly independent.  The transformation is surjective if , which happens when the columns of span .   "
},
{
  "id": "sec-lt-intro-4-15",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-15",
  "type": "Example",
  "number": "1.2.16",
  "title": "",
  "body": "  The linear transformation defined by is injective but not surjective because the constant polynomials are not in .   "
},
{
  "id": "sec-lt-intro-4-16",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-16",
  "type": "Definition",
  "number": "1.2.17",
  "title": "",
  "body": "  A linear transformation is called an isomorphism if is both surjective and injective.   "
},
{
  "id": "sec-lt-intro-4-18",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-18",
  "type": "Proposition",
  "number": "1.2.18",
  "title": "",
  "body": "  If is surjective, then .  If is injective, then .  If is an isomorphism, then .   "
},
{
  "id": "sec-lt-intro-5-2",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-5-2",
  "type": "Example",
  "number": "1.2.19",
  "title": "",
  "body": "  Consider the linear transformation defined by . If , then . This shows that and . Therefore, is a vector space isomorphism.   "
},
{
  "id": "sec-lt-intro-5-3",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-5-3",
  "type": "Example",
  "number": "1.2.20",
  "title": "",
  "body": "  If is a vector space, then defined by is a linear transformation called the identity transformation.   "
},
{
  "id": "sec-lt-intro-5-7",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-5-7",
  "type": "Proposition",
  "number": "1.2.21",
  "title": "",
  "body": "  If is an ismorphism, there is a linear transformation such that , the identity transformation on , and , the identity transformation on . We will typically denote as .   "
},
{
  "id": "prop-fin-dim-isom",
  "level": "2",
  "url": "sec-lt-intro.html#prop-fin-dim-isom",
  "type": "Proposition",
  "number": "1.2.22",
  "title": "",
  "body": "  If is a finite dimensional vector space of dimension over the field , then there is an isomorphism .    We choose a basis and define . By the linear independence of the basis, we see that is injective. Since the span of the basis vectors is , we see that is surjective.   "
},
{
  "id": "sec-lt-intro-6-4",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-6-4",
  "type": "Example",
  "number": "1.2.23",
  "title": "",
  "body": "  Consider the vector space with the basis . Then we have . We may think of this as a coordinate system in the vector space of polynomials.   "
},
{
  "id": "sec-lt-intro-6-7",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-6-7",
  "type": "Definition",
  "number": "1.2.24",
  "title": "",
  "body": "  If is a linear transformation, a basis for and a basis for , we say that the matrix is the matrix associated to with respect to these bases.   "
},
{
  "id": "sec-lt-intro-6-8",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-6-8",
  "type": "Example",
  "number": "1.2.25",
  "title": "",
  "body": "  Consider where . If we choose the bases and , then .   "
},
{
  "id": "sec-lt-intro-6-10",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-6-10",
  "type": "Proposition",
  "number": "1.2.26",
  "title": "",
  "body": "  If and are linear transformations and , , and are bases for , , and , respectively, then .    We denote the vectors in the bases by , , and , respectively. Similarly, we use the shorthand   We have , which implies that Therefore, , which says that as expected.   "
},
{
  "id": "sec-lt-intro-6-12",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-6-12",
  "type": "Proposition",
  "number": "1.2.27",
  "title": "",
  "body": "  Suppose that is a linear transformation and is a basis for and is a basis for . If is a vector in , then .   "
},
{
  "id": "sec-lt-intro-6-14",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-6-14",
  "type": "Example",
  "number": "1.2.28",
  "title": "",
  "body": "  Suppose that and that and . Then This matrix converts the coordinate representation of a polynomials in the basis into the coordinate representation of the same polynomial in the basis.  The inverse of this matrix will convert the -coordinate representation of a polynomial into the -coordinate representation: .  Consider the polynomial . We then have and . This means that as is easily checked.   "
},
{
  "id": "sec-lt-intro-6-16",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-6-16",
  "type": "Proposition",
  "number": "1.2.29",
  "title": "",
  "body": "  Suppose that is a linear transformation and that and are two bases for . Then .   "
},
{
  "id": "sec-lt-intro-6-18",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-6-18",
  "type": "Definition",
  "number": "1.2.30",
  "title": "",
  "body": "  Two square matrices and are called similar if there is a matrix such that .   "
},
{
  "id": "sec-lt-intro-6-20",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-6-20",
  "type": "Proposition",
  "number": "1.2.31",
  "title": "",
  "body": "  Similarity is an equivalence relation on the set of matrices.   "
},
{
  "id": "sec-lt-intro-6-21",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-6-21",
  "type": "Proposition",
  "number": "1.2.32",
  "title": "",
  "body": "  Suppose that and are similar matrices. If is a basis for and , then for some other basis .   "
},
{
  "id": "sec-lt-intro-6-24",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-6-24",
  "type": "Definition",
  "number": "1.2.33",
  "title": "",
  "body": "  If and are two vector spaces, then is the set of linear transformations .   "
},
{
  "id": "sec-lt-intro-6-25",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-6-25",
  "type": "Proposition",
  "number": "1.2.34",
  "title": "",
  "body": "  If and are two vector spaces, then is a vector space. Moreover, if is a finite basis for and is a finite basis for , then the function by is an isomorphism. It then follows that .   "
},
{
  "id": "sec-orthogonal",
  "level": "1",
  "url": "sec-orthogonal.html",
  "type": "Section",
  "number": "1.3",
  "title": "Inner products",
  "body": " Inner products   In our earlier studies, we introduced the dot product to introduce a richer geometric perspective on some key ideas. In particular, we could use the dot product to detect when vectors are orthogonal, and this led to many simplifications. For instance, the inverse of a matrix whose columns form an orthonormal basis of is just the transpose of that matrix.  As we expand our study to consider more general vector spaces, we need to introduce a concept like the dot product for vector spaces. This leads us to the concept of an inner product.    Inner products  On the vector space , we introduced the dot product between two vectors: . One important property is that .  More generally, we had the following properties:   Positivity  with if and only if .   Symmetry  .   Linearity   .     Things are a little different when we are using complex numbers. If is a general complex number, then is not guaranteed to be real, much less nonnegative. To preserve the positivity condition above, remember that the complex conjugate is defined by so that if , we have . We leads us to define the dot product on so that , which means . With this definition, the three properties above still hold except that the symmetry condition is modified to .    If is a vector space, we call an inner product provided that  Positivity  and if and only if .   Conjugate symmetry  .   Linearity  .         If , then is an inner product.  In fact, this is true if as well. If is real, then so the conjugate symmetry condition is the same as the symmetry condition above.      If is the vector space of all polynomials over , then is an inner product.  This may seem strange when you first see it, but it is just an extension of the usual dot product in some sense. For instance, think of a three-dimensional vector as a function from the set into . The dot product between two vectors is then , so that we multiply the the value of and at each point and add. If we interpret the integral as an infinite sum, this is what the inner product defined above is doing.      Suppose , the vector space of matrices. If is such a matrix, we define to be its conjugate transpose. That is, . Then is an inner product, where represents the trace of a matrix, the sum of its diagonal entries.  It's relatively straightforward to show that .    It may be useful to note the following consequence of the conjugate symmetry and linearity properties: .    We typically refer to a vector space with an inner product as an inner product space .      The length or norm of a vector in an inner product space is .    With this definition, it follows that .    If and are inner product spaces and is a vector space isomorphism such that for all vectors and , we say that is an isometry of vector spaces.      Orthogonality  Since an inner product is the same concept as the dot product extended to vector spaces, we have access to many similar concepts, such as orthogonality.    Two vectors and in an inner product space are orthogonal if .      If , the set of all polynomials, with the inner product given in , then is orthogonal to . This follows because each term in is an odd power of whose integral on the interval will be zero by symmetry.  More generally, any polynomial whose terms are all of odd degree is orthogonal to any polynomials whose terms are all of even degree.     Pythagorean theorem   If and are two orthogonal vectors in an inner product space, then .    The follows from the linearity of the inner product:       In an inner product space, we say that is an orthogonal set if each vector is nonzero and each pair of vectors is orthogonal to one another.      In an inner product space, an orthogonal set is linearly independent.    Suppose that is an orthogonal set and that . If we take the inner product with for any , we have which says that .    From this, we conclude that an orthogonal set forms a basis for a subspace of the inner product space.   Projection formula   Suppose that is an orthogonal set in an inner product space and that is a vector in . The closest vector in to is called the orthogonal projection of onto and is given by .    This is the same expression as the Projection Formula that we frequently used in our previous classes and its found by the same argument.  We first find the vector so that is orthogonal to and then explain why it is the closest vector.  Notice that, by linearity, if a vector is orthogonal to each , then it is orthogonal to every vector in . This is because any vector in is a linear combination of so that and therefore .  We require that be orthogonal to so that or for all . Since is in , it can be expressed as a linear combination of : so that we have , which gives the expression for in the statement of the proposition.  Now suppose that is any other vector in . Then is in and hence orthogonal to . Therefore, by the Pythagoren theorem and hence , which shows that is closer to than any other vector in .    The Projection Formula was key to a wide range of useful concepts. In particular, we can apply the Gram-Schmidt algorithm as we did earlier.    A set of vectors is called orthonormal if each pair of vectors is orthogonal and each vector has unit length.      If is a finite dimensional subspace of an inner product space , then there is an orthonormal basis for .    We choose any basis for and then define and so on. This produces an orthogonal basis for since, at every step, .  Finally, we define to obtain an orthonormal basis for .    Notice that a vector space is a subspace of itself so the previous proposition implies that every finite dimensional subspace has an orthonormal basis.  Also, remember that any linearly independent set in can be extended to a basis of by . If we begin with an orthonormal set of vectors in , we can extend it to a basis of , and apply the Gram-Schmidt algorithm to the added basis vectors to obtain an orthonormal basis of . In other words,    Any orthonormal set in can be extended to an orthonormal basis for .      The adjoint of a linear transformation  We suppose now that and are inner product spaces over a field . If is a linear transformation, we can define its adjoint through the following relationship for every in and in . We can also write this expression as by applying the conjugate symmetry condition twice. The first thing to establish is that is itself an linear transformation.  We will first prove a useful result in the simple case that .   Riesz represenation theorem   Suppose that is an inner product space and is a linear transformation. Then there is a unique vector such that .    If , then we can take as well.  So suppose that , which means that there is a vector such that . Therefore, is onto and .  If , we know that . Choose an orthonormal basis for . We know by that we can add a vector to obtain an orthonormal basis. Let .  If is a vector in , then . Then .  To see that is unique, suppose that there are two such vectors and such that for every vector . In particular, we have for every including . Therefore, , which implies that .      If and are inner product spaces and a linear transformation, the adjoint of is defined by by or equivalently .    There are a number of things implied by this definition so we need to check that they are satisfied. The following proposition will take care of this for us.    The adjoint is a linear transformation.    We first need to establish that is a vector in for every in . For a fixed in , define the linear transformation by . By , we know there is a vector in such that so we define , which gives . We have now defined a function such that for all and . We just need to show that is a linear transformation.   We need to show that satisfies the two linearity properties. Suppose that and are vectors in . Then Since this holds for any vector , we have .  In the same way, we see that , which verifies that is an operator on .    We now relate the matrices associated to and with respect to an orthonormal basis of . As before, we use to denote an orthonormal basis of .    Suppose that and are inner product spaces with orthonormal bases and , respectively. If is a linear transformation, , and , then , the conjugate transpose of .    If and , then which says that .     Real adjoints  If the underlying field , then the matrix associated to the adjoint is just the transpose of the matrix associated to . In other words, in the notation of .     "
},
{
  "id": "sec-orthogonal-3-5",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-3-5",
  "type": "Definition",
  "number": "1.3.1",
  "title": "",
  "body": "  If is a vector space, we call an inner product provided that  Positivity  and if and only if .   Conjugate symmetry  .   Linearity  .      "
},
{
  "id": "sec-orthogonal-3-6",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-3-6",
  "type": "Example",
  "number": "1.3.2",
  "title": "",
  "body": "  If , then is an inner product.  In fact, this is true if as well. If is real, then so the conjugate symmetry condition is the same as the symmetry condition above.   "
},
{
  "id": "example-inner-poly",
  "level": "2",
  "url": "sec-orthogonal.html#example-inner-poly",
  "type": "Example",
  "number": "1.3.3",
  "title": "",
  "body": "  If is the vector space of all polynomials over , then is an inner product.  This may seem strange when you first see it, but it is just an extension of the usual dot product in some sense. For instance, think of a three-dimensional vector as a function from the set into . The dot product between two vectors is then , so that we multiply the the value of and at each point and add. If we interpret the integral as an infinite sum, this is what the inner product defined above is doing.   "
},
{
  "id": "sec-orthogonal-3-8",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-3-8",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": "  Suppose , the vector space of matrices. If is such a matrix, we define to be its conjugate transpose. That is, . Then is an inner product, where represents the trace of a matrix, the sum of its diagonal entries.  It's relatively straightforward to show that .   "
},
{
  "id": "sec-orthogonal-3-10",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-3-10",
  "type": "Definition",
  "number": "1.3.5",
  "title": "",
  "body": "  We typically refer to a vector space with an inner product as an inner product space .   "
},
{
  "id": "sec-orthogonal-3-11",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-3-11",
  "type": "Definition",
  "number": "1.3.6",
  "title": "",
  "body": "  The length or norm of a vector in an inner product space is .   "
},
{
  "id": "sec-orthogonal-3-13",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-3-13",
  "type": "Definition",
  "number": "1.3.7",
  "title": "",
  "body": "  If and are inner product spaces and is a vector space isomorphism such that for all vectors and , we say that is an isometry of vector spaces.   "
},
{
  "id": "sec-orthogonal-4-3",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-4-3",
  "type": "Definition",
  "number": "1.3.8",
  "title": "",
  "body": "  Two vectors and in an inner product space are orthogonal if .   "
},
{
  "id": "sec-orthogonal-4-4",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-4-4",
  "type": "Example",
  "number": "1.3.9",
  "title": "",
  "body": "  If , the set of all polynomials, with the inner product given in , then is orthogonal to . This follows because each term in is an odd power of whose integral on the interval will be zero by symmetry.  More generally, any polynomial whose terms are all of odd degree is orthogonal to any polynomials whose terms are all of even degree.   "
},
{
  "id": "sec-orthogonal-4-5",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-4-5",
  "type": "Proposition",
  "number": "1.3.10",
  "title": "Pythagorean theorem.",
  "body": " Pythagorean theorem   If and are two orthogonal vectors in an inner product space, then .    The follows from the linearity of the inner product:    "
},
{
  "id": "sec-orthogonal-4-6",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-4-6",
  "type": "Definition",
  "number": "1.3.11",
  "title": "",
  "body": "  In an inner product space, we say that is an orthogonal set if each vector is nonzero and each pair of vectors is orthogonal to one another.   "
},
{
  "id": "sec-orthogonal-4-7",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-4-7",
  "type": "Proposition",
  "number": "1.3.12",
  "title": "",
  "body": "  In an inner product space, an orthogonal set is linearly independent.    Suppose that is an orthogonal set and that . If we take the inner product with for any , we have which says that .   "
},
{
  "id": "sec-orthogonal-4-9",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-4-9",
  "type": "Proposition",
  "number": "1.3.13",
  "title": "Projection formula.",
  "body": " Projection formula   Suppose that is an orthogonal set in an inner product space and that is a vector in . The closest vector in to is called the orthogonal projection of onto and is given by .    This is the same expression as the Projection Formula that we frequently used in our previous classes and its found by the same argument.  We first find the vector so that is orthogonal to and then explain why it is the closest vector.  Notice that, by linearity, if a vector is orthogonal to each , then it is orthogonal to every vector in . This is because any vector in is a linear combination of so that and therefore .  We require that be orthogonal to so that or for all . Since is in , it can be expressed as a linear combination of : so that we have , which gives the expression for in the statement of the proposition.  Now suppose that is any other vector in . Then is in and hence orthogonal to . Therefore, by the Pythagoren theorem and hence , which shows that is closer to than any other vector in .   "
},
{
  "id": "sec-orthogonal-4-11",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-4-11",
  "type": "Definition",
  "number": "1.3.14",
  "title": "",
  "body": "  A set of vectors is called orthonormal if each pair of vectors is orthogonal and each vector has unit length.   "
},
{
  "id": "sec-orthogonal-4-12",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-4-12",
  "type": "Proposition",
  "number": "1.3.15",
  "title": "",
  "body": "  If is a finite dimensional subspace of an inner product space , then there is an orthonormal basis for .    We choose any basis for and then define and so on. This produces an orthogonal basis for since, at every step, .  Finally, we define to obtain an orthonormal basis for .   "
},
{
  "id": "prop-ortho-extend",
  "level": "2",
  "url": "sec-orthogonal.html#prop-ortho-extend",
  "type": "Proposition",
  "number": "1.3.16",
  "title": "",
  "body": "  Any orthonormal set in can be extended to an orthonormal basis for .   "
},
{
  "id": "prop-riesz",
  "level": "2",
  "url": "sec-orthogonal.html#prop-riesz",
  "type": "Proposition",
  "number": "1.3.17",
  "title": "Riesz represenation theorem.",
  "body": " Riesz represenation theorem   Suppose that is an inner product space and is a linear transformation. Then there is a unique vector such that .    If , then we can take as well.  So suppose that , which means that there is a vector such that . Therefore, is onto and .  If , we know that . Choose an orthonormal basis for . We know by that we can add a vector to obtain an orthonormal basis. Let .  If is a vector in , then . Then .  To see that is unique, suppose that there are two such vectors and such that for every vector . In particular, we have for every including . Therefore, , which implies that .   "
},
{
  "id": "sec-orthogonal-5-5",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-5-5",
  "type": "Definition",
  "number": "1.3.18",
  "title": "",
  "body": "  If and are inner product spaces and a linear transformation, the adjoint of is defined by by or equivalently .   "
},
{
  "id": "sec-orthogonal-5-7",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-5-7",
  "type": "Proposition",
  "number": "1.3.19",
  "title": "",
  "body": "  The adjoint is a linear transformation.    We first need to establish that is a vector in for every in . For a fixed in , define the linear transformation by . By , we know there is a vector in such that so we define , which gives . We have now defined a function such that for all and . We just need to show that is a linear transformation.   We need to show that satisfies the two linearity properties. Suppose that and are vectors in . Then Since this holds for any vector , we have .  In the same way, we see that , which verifies that is an operator on .   "
},
{
  "id": "prop-adjoint-matrix",
  "level": "2",
  "url": "sec-orthogonal.html#prop-adjoint-matrix",
  "type": "Proposition",
  "number": "1.3.20",
  "title": "",
  "body": "  Suppose that and are inner product spaces with orthonormal bases and , respectively. If is a linear transformation, , and , then , the conjugate transpose of .    If and , then which says that .   "
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
