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
  "body": " Vector spaces   A vector space is simply a mathematical set on which we can perform addition and scalar multiplication. We already have some familiarity with vector spaces since is a good example. However, as mentioned in the introduction to this chapter, polynomials have similar operations so we would like to create a mathematical structure that allows us to study vectors and polynomials as equals. This is why the concept of a vector space is so useful.    Vector spaces  The usual place to get started would be with a general definition of a vector space. However, this is one place in mathematics, among others, where a general definition can obscure the underlying idea. For that reason, let's just start with some examples.   Matrices   Let's look at the set of all matrices, which include the matrices . As we saw in our earlier course, we can multiply a matrix by a scalar and we can add matrices: . Notice that both operations produce a new object that is also a matrix. We say that that the set is closed under these operations.  With these operations, the set of matrices becomes a vector space.    Notice that the entries in our matrices are real numbers . We could instead change the example so that we consider matrices whose entries are in the complex numbers .   Complex matrices   Consider now the set of matrices with complex entries. For example, . Scalar multiplication includes multiplication by complex numbers so we have .    These examples show that vector spaces have an underlying field , which is the set of scalars by which we can multiply. You may or may not know about fields depending on whether you have studied abstract algebra. In either case, the underlying field of our vector spaces will always be either the real numbers or the complex numbers, which we will write as or .  Having seen some examples, we offer a general definition of a vector space.   Vector space   A vector space over a field is a set with two operations, scalar multiplication by elements of and addition, under which is closed. Moreover, these operations satisfy the following natural properties:  Addition is commutative; that is for every pair of .  There is an additive identity; that is, there is an element such that for any element in .  Every element has an additive inverse such that . We will usually write the additive identity as .  Addition is associative, which means that we can regroup a sum in the following way: .  For every , we have .  Scalar multiplication is distributive in the sense that .      That is a long list of properties. Technically speaking, if we want to check that some set with operations is a vector space, we need to check each one of those properties. In practice, however, we will know a vector space when we see one, and we will be fairly loose with these details. We will often think of a vector space as a set that is closed under operations that are called addition and scalar multiplication and that satisfy some familiar compatibility properties.    Polynomials   If or , the set of polynomials whose coefficients are in form a vector space .     Polynomials of degree   Rather than the set of all polynomials, we define the set to be the set of all polynomials whose degree is or less. For example, contains all polynomials of degree two or less: where the coefficients are assumed to be either real or complex, as will be either specified or clear from the context.  If and , then the operations of scalar multiplication and addition are . In particular, the additive identity is .    Of course, the set of all polynomials is larger than the set of quadratic polynomials, and we have . We say that is a vector subspace of .   Vector subspace   A subset of a vector space is called a subspace of if is closed under the operations of scalar multiplication and addition that it inherits from .    Notice that a subspace is itself a vector space and that the underlying fields of and are the same.  Every vector space has two subspaces that we will sometimes need to consider, namely, the subspace consisting of only the zero vector and the entire vector space itself.   Function spaces   Let be the set of functions whose domain is and whose codomain is ; that is, functions of the form . It follows that is a complex vector space.  If and are such functions and is a complex scalar, then we define new functions and by .    If we were to consider functions , we would obtain a real vector space. This is not a subspace of , however, since the underlying fields are different. Rather, here are some natural subspaces of .    The following are subspaces of :  The set of functions for which .  If is a scalar and and are functions that satisfy , then showing that this set of functions is closed under scalar multiplication and addition.   The set of periodic functions whose period is 7; that is functions that satisfy for all .  Again, .   The set of continous functions.  The set of functions that satisfy is, however, not a subspace since it is not closed under scalar multiplication or vector addition. For instance, if , then .       >  If is a vector space and and are subspaces, then is also a subspace of as it can be seen that the interection is closed under scalar multiplication and addition. The compatibility properties are satisfied due to the fact that is itself a vector space.    When working with a vector space , we will frequently refer to the elements of as vectors even though they may be polynomials, matrices, functions, or even something entirely different.    Linear combinations  Our earlier study of linear algebra really began once we introduced linear combinations. Of course, linear combinations are defined purely in terms of scalar multiplication and addition so we can form linear combinations of elements in a vector space.    Suppose that is a set of vectors in a vector space over a field . A linear combination of these vectors is a vector of the form where the scalars belong to the field .      Consider the vector space consisting of polynomials having degree two or less and the polynomials and . We can form the linear combination .    Because we can form linear combinations, we can also think about concepts like span and linear independence.   Span   The span of a set of vectors in a vector space is the set of all linear combinations that can be formed from the set.      Consider the vector space formed by all matrices. Then consider . The span of these three matrices is the set of all possible linear combinations , which is the set of all upper triangular matrices.    It's not hard to see that the span of a set of vectors in forms a subspace. We just have to check that the span is closed under scalar multiplication and addition. So we will consider vectors . If we multiply by the scalar , we have , which is in the span of the set of vectors. Similarly, , which is also in the span. This demonstrates the following proposition.    The span of a set of vectors in is a subspace of .    We can also define linear dependence as before.   Linear independence   A set of vectors in is linearly dependent if one of the vectors can be written as a linear combination of the others.      In , consider the polynomials . This set of polynomials is linear dependent because .  Notice that this relationship can also be expressed as , which leads to the next proposition.      A set of vectors in a vector space is linearly dependent if and only if for some set of scalars with at least one being nonzero.  Equivalently, the set of vectors is linearly independent if and only if implies that all the scalars .    The second statement is logically equivalent to the first so our proof will focus on the first statement. Suppose that the set is linearly dependent and that is the first vector that is a linear combination of vectors that occur previously in the list. This means that there are scalars such that . We can rewrite this expression as , which means that there are scalars with .  Conversely, suppose that for some set of scalars and that is the last nonzero scalar. We can rewrite this expression as . This shows that is a linear combination of the other vectors and that the set of vectors is therefore linearly dependent.      Suppose that is a linear dependent set of vectors and that can be written as a linear combination of the other vectors. Removing from the set does not change the span; that is, .    If , then we can replace in this expression with a linear combination of the other vectors. This shows that can be written as a linear combination of the set of vectors with removed.      Bases    A set of vectors in a vector space forms a basis for if the set is linearly independent and its span is .      We can see that the polynomials form a basis of . Notice that this statement is true for both and .  First, every polynomial in can be written as , showing that , , and span . To see that these polynomials are linearly independent, suppose that , the additivity identity in . We therefore have from which we conclude that , , and . Therefore, , , and are linearly indepedent by and hence form a basis for .      The polynomials form a basis of .  To see this, suppose that is a polynomial in . We wish to see that can be written as a linear combination of , , and . This means that there are scalars , , and such that This is a linear system of three equations in the three variables , , and , which may be written as , which has a unique solution for every vector . This says that .  Moreover, since the solution to the equation above is unique, the only linear combination must have , which means that these polynomials are linearly independent.      Consider the set of polynomials in . We claim that these polynomials form a basis for .  To see that they are linearly independent, we will suppose that they are linearly dependent and derive a contradiction. Suppose that and that some of the scalars are nonzero. Let be the last nonzero scalar so that . That is, is the only term involving . Therefore, , which contradicts our assumption that .  To see that these polynomials span , we offer a proof by induction. When , we see that spans . Now suppose that span and that is a polynomial in . Notice that the polynomials and have the same coefficient of . Therefore, is a polynomial in and can be written as a linear combination of . This means that       There is no finite set that forms a basis for , the set of all polynomials. Given any finite set, there is a polynomial having a highest degree . Therefore, the polynomial is not in the span of the set so it cannot be a basis.      We say that a vector space is finite dimensional if there is a finite set whose span is . Otherwise, we say that is infinite dimensional.    Notice that any finite dimensional vector space must have a basis.    Any finite dimensional vector space has a basis consisting of a finite number of vectors.    If is a finite dimensional vector space, there is a finite set of vectors whose span is . If this set of vectors is linearly independent, then it forms a basis. It not, we can remove one vector that is a linear combination of the others. says that the span of the remaining vectors is still so we continue removing vectors one at a time until we obtain a linearly independent set, which must be a basis.    Notice that the two bases for in and both consist of three polynomials. That is, these two bases for have the same number of vectors. This is generally true as we now explain. First, we will prove a more technical, but still useful, result.    The number of vectors in a linearly independent set in the vector space is no more than the number of vectors in any set whose span is .    Suppose that is a linear independent set in the vector space and that is a set whose span is . We wish to show that .  We first construct a new list whose span is . Because the span of the vectors is , is a linear combination of the vectors, which means that this set of vectors is linearly dependent. We let be the first vector in the list that is a linear combination of vectors that occur previously in the list. Since the set of vectors is linearly independent, is nonzero, which means that must be one of the vectors. If we remove , we have a new list whose span is by . Notice that the cardinality of this new list is still .  We can repeat this process. We prepend to the list to obtain which must be linearly dependent. Let be the first vector in the list that is a linear combination of vectors that occur previously in the list. Once again, since the vectors form a linearly independent set, we know that is one of the vectors. We can remove to obtain a new list of vectors whose span is . Again, the cardinality of this new list is .  We continue this process until all the vectors have been added to the beginning of the list. At each step, the vector we remove is one of the vectors since the vectors are linearly independent. Therefore, we have a list of vectors that contains , which says that .      If is a finite dimensional vector space, then any two bases have the same number of vectors.    Suppose that is one basis and that is another. The set of vectors forms a linearly independent set and the set of vectors spans . By , we know that .  We can repeat this argument interchanging the two bases to conclude that . Put together, these two facts mean that .    If is a finite dimensional vector space, we define its dimension to be the number of vectors in a basis. In this case, the number of vectors in any basis is the same so this definition does not depend on which basis we choose.    If a vector space has a basis with vectors, we say that the dimension of is and write .      We have seen that is a basis for . Therefore, .      Returning to the vector space of matrices, as introduced in , we find a basis . This means that .  More generally, if , the vector space of matrices, we have .    We may informally think of the dimension of a vector space as a measure of its size. Therefore, it should follow that the dimension of a subspace cannot be larger than the dimension of the vector space in which it resides. We first call attention to a useful fact.    If is a linearly independent subset of the vector space whose span is not , then there is a vector in such that is a linearly independent subset of .    Under the assumptions of this proposition, the span of is not so there is a vector that is not in the span of the vectors. This means that it is not a linear combination of the vectors and therefore is a linearly independent set.      If is a vector space whose dimension and is a linearly independent set in , then also spans and is therefore a basis of .    We will prove this fact by contradiction. Suppose that does not span . Then by , we can add a vector so that is a linearly independent subset of vectors in . However, any linear independent subset of can have no more than vectors by , which says that must span .      If is a subspace of the finite dimensional vector space , then is also a finite dimensional vector space and .    We will first explain why is a finite dimensional vector space, which means we need to explain why there is a finite set that spans . We begin with any set of vectors in . By , we can remove vectors one at a time until we obtain a linearly independent set in . If this set does not span , then we can add vectors in one at a time to obtain new linearly independent sets in . This process must stop at some point since any linearly independent set in can have no more than vectors. Therefore, we have obtained a finite set that spans , which says that is finite dimensional.  Since any basis for is also a linearly independent subset of , it can contain no more vectors than a basis of . This tells us that .      Any linearly independent set in a finite dimensional vector space can be extended to a basis for .    Suppose that is a linearly independent set in and that is a basis for . Join the two lists together to obtain . We are guaranteed that the span of this set is . If it is not a linear independent set, then we remove the first vector that is a linear combination of the others. Since the vectors are linearly independent, the vector that is removed must be one of the vectors. Continuing in this way, we eventually obtain a basis that includes the vectors .    The following is a consequence of .    If is a subspace of and , then .    Some further conseqences of these ideas follow.    If is a finite dimensional vector space of dimension and is a set of vectors in , it follows that   if the set of vectors is linearly independent, then it is a basis.    if the span of the set of vectors is , then it is a basis.         Sums of subspaces  If we have two subspaces and in a vector space , says that the intersection is also a subspace of . The same is not true, however, for the union as demonstrated by .    Suppose that with and . If and , then consists of two lines as seen in . Notice that is not in , which shows that is not closed under addition.   The union of two subspaces is not usually a subspace.     v1=(1,1)  v2=(-1,1)         V_1    V_2          Instead, we construct a vector subspace that contains the union . This construction will be useful in the future as it helps us to break vector spaces into simpler pieces. Suppose that we have a vector space and that and are subspaces. We can define a new subspace .    Given subspaces and of , we form the vector space sum  as the subset of whose elements can be written in the form where and .      Suppose that , is the 1-dimensional subspace whose vectors are , and is the 1-dimensional subspace whose vectors are . Then is the 2-dimensional subspace whose vectors have the form .      Suppose that , is the 2-dimensional subspace having vectors , and is the 2-dimensional subspace having vectors . Then is the three-dimensional subspace consisting of vectors .      If and are subspaces of , then is also a subspace of and .    One can verify that is closed under scalar multiplication and addition, which means that it forms a subspace of .  Suppose that has a basis . Since is a subspace of , this basis can be extended to a basis for by adding vectors . Similarly, the basis for can be extended to a basis for by adding vectors . Putting all these vectors together gives the set , which we claim is a basis for .  Any vector in can be written as the sum of a vector in and a vector in . Therefore, the span of the vectors in is since contained within is a basis for and a basis for .  Moreover, the set of vectors is linearly independent. Suppose that . Rearranging this gives . The vector on the left is in but not , while the vector on the right is in . The only way this can happen is for both vectors to be zero, which means that all the coefficients must be zero.      If , we say that is the direct sum of and and denote it as .    As a consequence of , we have that     .    As a consequence of , we have    If is a subspace of , then there is another subspace such that .      If , we say that is a complement of .     "
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
  "body": " Polynomials of degree   Rather than the set of all polynomials, we define the set to be the set of all polynomials whose degree is or less. For example, contains all polynomials of degree two or less: where the coefficients are assumed to be either real or complex, as will be either specified or clear from the context.  If and , then the operations of scalar multiplication and addition are . In particular, the additive identity is .   "
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
  "body": " Function spaces   Let be the set of functions whose domain is and whose codomain is ; that is, functions of the form . It follows that is a complex vector space.  If and are such functions and is a complex scalar, then we define new functions and by .   "
},
{
  "id": "sec-vs-intro-3-18",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-3-18",
  "type": "Example",
  "number": "1.1.8",
  "title": "",
  "body": "  The following are subspaces of :  The set of functions for which .  If is a scalar and and are functions that satisfy , then showing that this set of functions is closed under scalar multiplication and addition.   The set of periodic functions whose period is 7; that is functions that satisfy for all .  Again, .   The set of continous functions.  The set of functions that satisfy is, however, not a subspace since it is not closed under scalar multiplication or vector addition. For instance, if , then .      "
},
{
  "id": "example-vs-intersection",
  "level": "2",
  "url": "sec-vs-intro.html#example-vs-intersection",
  "type": "Example",
  "number": "1.1.9",
  "title": "",
  "body": ">  If is a vector space and and are subspaces, then is also a subspace of as it can be seen that the interection is closed under scalar multiplication and addition. The compatibility properties are satisfied due to the fact that is itself a vector space.   "
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
  "id": "sec-vs-intro-4-7",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-4-7",
  "type": "Example",
  "number": "1.1.13",
  "title": "",
  "body": "  Consider the vector space formed by all matrices. Then consider . The span of these three matrices is the set of all possible linear combinations , which is the set of all upper triangular matrices.   "
},
{
  "id": "sec-vs-intro-4-9",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-4-9",
  "type": "Proposition",
  "number": "1.1.14",
  "title": "",
  "body": "  The span of a set of vectors in is a subspace of .   "
},
{
  "id": "sec-vs-intro-4-11",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-4-11",
  "type": "Definition",
  "number": "1.1.15",
  "title": "Linear independence.",
  "body": " Linear independence   A set of vectors in is linearly dependent if one of the vectors can be written as a linear combination of the others.   "
},
{
  "id": "sec-vs-intro-4-12",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-4-12",
  "type": "Example",
  "number": "1.1.16",
  "title": "",
  "body": "  In , consider the polynomials . This set of polynomials is linear dependent because .  Notice that this relationship can also be expressed as , which leads to the next proposition.   "
},
{
  "id": "prop-lin-indep-scalars",
  "level": "2",
  "url": "sec-vs-intro.html#prop-lin-indep-scalars",
  "type": "Proposition",
  "number": "1.1.17",
  "title": "",
  "body": "  A set of vectors in a vector space is linearly dependent if and only if for some set of scalars with at least one being nonzero.  Equivalently, the set of vectors is linearly independent if and only if implies that all the scalars .    The second statement is logically equivalent to the first so our proof will focus on the first statement. Suppose that the set is linearly dependent and that is the first vector that is a linear combination of vectors that occur previously in the list. This means that there are scalars such that . We can rewrite this expression as , which means that there are scalars with .  Conversely, suppose that for some set of scalars and that is the last nonzero scalar. We can rewrite this expression as . This shows that is a linear combination of the other vectors and that the set of vectors is therefore linearly dependent.   "
},
{
  "id": "prop-lin-dep-span",
  "level": "2",
  "url": "sec-vs-intro.html#prop-lin-dep-span",
  "type": "Proposition",
  "number": "1.1.18",
  "title": "",
  "body": "  Suppose that is a linear dependent set of vectors and that can be written as a linear combination of the other vectors. Removing from the set does not change the span; that is, .    If , then we can replace in this expression with a linear combination of the other vectors. This shows that can be written as a linear combination of the set of vectors with removed.   "
},
{
  "id": "sec-vs-intro-5-2",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-2",
  "type": "Definition",
  "number": "1.1.19",
  "title": "",
  "body": "  A set of vectors in a vector space forms a basis for if the set is linearly independent and its span is .   "
},
{
  "id": "ex-poly-basis-1",
  "level": "2",
  "url": "sec-vs-intro.html#ex-poly-basis-1",
  "type": "Example",
  "number": "1.1.20",
  "title": "",
  "body": "  We can see that the polynomials form a basis of . Notice that this statement is true for both and .  First, every polynomial in can be written as , showing that , , and span . To see that these polynomials are linearly independent, suppose that , the additivity identity in . We therefore have from which we conclude that , , and . Therefore, , , and are linearly indepedent by and hence form a basis for .   "
},
{
  "id": "ex-poly-basis-2",
  "level": "2",
  "url": "sec-vs-intro.html#ex-poly-basis-2",
  "type": "Example",
  "number": "1.1.21",
  "title": "",
  "body": "  The polynomials form a basis of .  To see this, suppose that is a polynomial in . We wish to see that can be written as a linear combination of , , and . This means that there are scalars , , and such that This is a linear system of three equations in the three variables , , and , which may be written as , which has a unique solution for every vector . This says that .  Moreover, since the solution to the equation above is unique, the only linear combination must have , which means that these polynomials are linearly independent.   "
},
{
  "id": "sec-vs-intro-5-5",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-5",
  "type": "Example",
  "number": "1.1.22",
  "title": "",
  "body": "  Consider the set of polynomials in . We claim that these polynomials form a basis for .  To see that they are linearly independent, we will suppose that they are linearly dependent and derive a contradiction. Suppose that and that some of the scalars are nonzero. Let be the last nonzero scalar so that . That is, is the only term involving . Therefore, , which contradicts our assumption that .  To see that these polynomials span , we offer a proof by induction. When , we see that spans . Now suppose that span and that is a polynomial in . Notice that the polynomials and have the same coefficient of . Therefore, is a polynomial in and can be written as a linear combination of . This means that    "
},
{
  "id": "sec-vs-intro-5-6",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-6",
  "type": "Example",
  "number": "1.1.23",
  "title": "",
  "body": "  There is no finite set that forms a basis for , the set of all polynomials. Given any finite set, there is a polynomial having a highest degree . Therefore, the polynomial is not in the span of the set so it cannot be a basis.   "
},
{
  "id": "sec-vs-intro-5-7",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-7",
  "type": "Definition",
  "number": "1.1.24",
  "title": "",
  "body": "  We say that a vector space is finite dimensional if there is a finite set whose span is . Otherwise, we say that is infinite dimensional.   "
},
{
  "id": "sec-vs-intro-5-9",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-9",
  "type": "Proposition",
  "number": "1.1.25",
  "title": "",
  "body": "  Any finite dimensional vector space has a basis consisting of a finite number of vectors.    If is a finite dimensional vector space, there is a finite set of vectors whose span is . If this set of vectors is linearly independent, then it forms a basis. It not, we can remove one vector that is a linear combination of the others. says that the span of the remaining vectors is still so we continue removing vectors one at a time until we obtain a linearly independent set, which must be a basis.   "
},
{
  "id": "prop-lin-indep-num",
  "level": "2",
  "url": "sec-vs-intro.html#prop-lin-indep-num",
  "type": "Proposition",
  "number": "1.1.26",
  "title": "",
  "body": "  The number of vectors in a linearly independent set in the vector space is no more than the number of vectors in any set whose span is .    Suppose that is a linear independent set in the vector space and that is a set whose span is . We wish to show that .  We first construct a new list whose span is . Because the span of the vectors is , is a linear combination of the vectors, which means that this set of vectors is linearly dependent. We let be the first vector in the list that is a linear combination of vectors that occur previously in the list. Since the set of vectors is linearly independent, is nonzero, which means that must be one of the vectors. If we remove , we have a new list whose span is by . Notice that the cardinality of this new list is still .  We can repeat this process. We prepend to the list to obtain which must be linearly dependent. Let be the first vector in the list that is a linear combination of vectors that occur previously in the list. Once again, since the vectors form a linearly independent set, we know that is one of the vectors. We can remove to obtain a new list of vectors whose span is . Again, the cardinality of this new list is .  We continue this process until all the vectors have been added to the beginning of the list. At each step, the vector we remove is one of the vectors since the vectors are linearly independent. Therefore, we have a list of vectors that contains , which says that .   "
},
{
  "id": "sec-vs-intro-5-12",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-12",
  "type": "Proposition",
  "number": "1.1.27",
  "title": "",
  "body": "  If is a finite dimensional vector space, then any two bases have the same number of vectors.    Suppose that is one basis and that is another. The set of vectors forms a linearly independent set and the set of vectors spans . By , we know that .  We can repeat this argument interchanging the two bases to conclude that . Put together, these two facts mean that .   "
},
{
  "id": "sec-vs-intro-5-14",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-14",
  "type": "Definition",
  "number": "1.1.28",
  "title": "",
  "body": "  If a vector space has a basis with vectors, we say that the dimension of is and write .   "
},
{
  "id": "sec-vs-intro-5-15",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-15",
  "type": "Example",
  "number": "1.1.29",
  "title": "",
  "body": "  We have seen that is a basis for . Therefore, .   "
},
{
  "id": "sec-vs-intro-5-16",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-16",
  "type": "Example",
  "number": "1.1.30",
  "title": "",
  "body": "  Returning to the vector space of matrices, as introduced in , we find a basis . This means that .  More generally, if , the vector space of matrices, we have .   "
},
{
  "id": "prop-lin-indep-add",
  "level": "2",
  "url": "sec-vs-intro.html#prop-lin-indep-add",
  "type": "Proposition",
  "number": "1.1.31",
  "title": "",
  "body": "  If is a linearly independent subset of the vector space whose span is not , then there is a vector in such that is a linearly independent subset of .    Under the assumptions of this proposition, the span of is not so there is a vector that is not in the span of the vectors. This means that it is not a linear combination of the vectors and therefore is a linearly independent set.   "
},
{
  "id": "prop-lin-dep-full",
  "level": "2",
  "url": "sec-vs-intro.html#prop-lin-dep-full",
  "type": "Proposition",
  "number": "1.1.32",
  "title": "",
  "body": "  If is a vector space whose dimension and is a linearly independent set in , then also spans and is therefore a basis of .    We will prove this fact by contradiction. Suppose that does not span . Then by , we can add a vector so that is a linearly independent subset of vectors in . However, any linear independent subset of can have no more than vectors by , which says that must span .   "
},
{
  "id": "sec-vs-intro-5-20",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-20",
  "type": "Proposition",
  "number": "1.1.33",
  "title": "",
  "body": "  If is a subspace of the finite dimensional vector space , then is also a finite dimensional vector space and .    We will first explain why is a finite dimensional vector space, which means we need to explain why there is a finite set that spans . We begin with any set of vectors in . By , we can remove vectors one at a time until we obtain a linearly independent set in . If this set does not span , then we can add vectors in one at a time to obtain new linearly independent sets in . This process must stop at some point since any linearly independent set in can have no more than vectors. Therefore, we have obtained a finite set that spans , which says that is finite dimensional.  Since any basis for is also a linearly independent subset of , it can contain no more vectors than a basis of . This tells us that .   "
},
{
  "id": "prop-basis-extend",
  "level": "2",
  "url": "sec-vs-intro.html#prop-basis-extend",
  "type": "Proposition",
  "number": "1.1.34",
  "title": "",
  "body": "  Any linearly independent set in a finite dimensional vector space can be extended to a basis for .    Suppose that is a linearly independent set in and that is a basis for . Join the two lists together to obtain . We are guaranteed that the span of this set is . If it is not a linear independent set, then we remove the first vector that is a linear combination of the others. Since the vectors are linearly independent, the vector that is removed must be one of the vectors. Continuing in this way, we eventually obtain a basis that includes the vectors .   "
},
{
  "id": "sec-vs-intro-5-23",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-23",
  "type": "Proposition",
  "number": "1.1.35",
  "title": "",
  "body": "  If is a subspace of and , then .   "
},
{
  "id": "sec-vs-intro-5-25",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-25",
  "type": "Proposition",
  "number": "1.1.36",
  "title": "",
  "body": "  If is a finite dimensional vector space of dimension and is a set of vectors in , it follows that   if the set of vectors is linearly independent, then it is a basis.    if the span of the set of vectors is , then it is a basis.      "
},
{
  "id": "example-vs-union",
  "level": "2",
  "url": "sec-vs-intro.html#example-vs-union",
  "type": "Example",
  "number": "1.1.37",
  "title": "",
  "body": "  Suppose that with and . If and , then consists of two lines as seen in . Notice that is not in , which shows that is not closed under addition.   The union of two subspaces is not usually a subspace.     v1=(1,1)  v2=(-1,1)         V_1    V_2         "
},
{
  "id": "sec-vs-intro-6-5",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-6-5",
  "type": "Definition",
  "number": "1.1.39",
  "title": "",
  "body": "  Given subspaces and of , we form the vector space sum  as the subset of whose elements can be written in the form where and .   "
},
{
  "id": "sec-vs-intro-6-6",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-6-6",
  "type": "Example",
  "number": "1.1.40",
  "title": "",
  "body": "  Suppose that , is the 1-dimensional subspace whose vectors are , and is the 1-dimensional subspace whose vectors are . Then is the 2-dimensional subspace whose vectors have the form .   "
},
{
  "id": "sec-vs-intro-6-7",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-6-7",
  "type": "Example",
  "number": "1.1.41",
  "title": "",
  "body": "  Suppose that , is the 2-dimensional subspace having vectors , and is the 2-dimensional subspace having vectors . Then is the three-dimensional subspace consisting of vectors .   "
},
{
  "id": "prop-dim-sum",
  "level": "2",
  "url": "sec-vs-intro.html#prop-dim-sum",
  "type": "Proposition",
  "number": "1.1.42",
  "title": "",
  "body": "  If and are subspaces of , then is also a subspace of and .    One can verify that is closed under scalar multiplication and addition, which means that it forms a subspace of .  Suppose that has a basis . Since is a subspace of , this basis can be extended to a basis for by adding vectors . Similarly, the basis for can be extended to a basis for by adding vectors . Putting all these vectors together gives the set , which we claim is a basis for .  Any vector in can be written as the sum of a vector in and a vector in . Therefore, the span of the vectors in is since contained within is a basis for and a basis for .  Moreover, the set of vectors is linearly independent. Suppose that . Rearranging this gives . The vector on the left is in but not , while the vector on the right is in . The only way this can happen is for both vectors to be zero, which means that all the coefficients must be zero.   "
},
{
  "id": "sec-vs-intro-6-9",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-6-9",
  "type": "Definition",
  "number": "1.1.43",
  "title": "",
  "body": "  If , we say that is the direct sum of and and denote it as .   "
},
{
  "id": "sec-vs-intro-6-11",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-6-11",
  "type": "Proposition",
  "number": "1.1.44",
  "title": "",
  "body": "   .   "
},
{
  "id": "sec-vs-intro-6-13",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-6-13",
  "type": "Proposition",
  "number": "1.1.45",
  "title": "",
  "body": "  If is a subspace of , then there is another subspace such that .   "
},
{
  "id": "sec-vs-intro-6-14",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-6-14",
  "type": "Definition",
  "number": "1.1.46",
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
  "body": " Linear transformations   We earlier viewed an matrix as defining a matrix transformation by . Due to the linearity of matrix multiplication, this meant that . Now that we are working with vector spaces, we can define linear transformations, which are functions between vector spaces that satisfy these properties.    Linear transformations  Given two vector spaces, and , we can define a linear transformation between them by generalizing our earlier notion of matrix transformation.    If and are vector spaces, then a linear transformation is a function such that, for every scalar and pair of vectors , we have .      Suppose that . Then defined by is a linear transformation.  This follows because matrix multiplication is a linear operation:       Suppose that , the set of functions . Then is a linear transformation .  To see this, we need to remember how scalar multiplication and vector addition work in . If is a scalar and and are functions, then Therefore,       Suppose that and . If is a polynomial in , define the function where is the derivative of . Two common rules of differentiation, the constant multiplier rule and the addition rule, imply that is a linear transformation.      If and , then is a linear transformation.      Suppose that is the vector space of matrices. Then by is not a linear transformation because .      Given two vector spaces, and , the set of linear transformations will be denoted as .      Notation  While a linear transformation is a function, we will frequently write , without parentheses, when we mean . This is similar to how we often write rather than in other courses.     The null space and range  A linear transformation creates a subspace of and a subspace of .    If is a linear transformation, we define the null space and range of to be .    In our earlier linear algebra courses, we considered the null space and column space of a matrix. The null space and range of a linear transformation is the same concept generalized to vector spaces.    Suppose that is a matrix and consider the linear transformation . Then is the set of solutions to the equation , which is the same as the null space .  Similarly, the column space is the set of vectors for which is consistent. In other words, is in if and only if there is a vector such that . This is precisely the definition of .      Consider the linear transformation defined by the matrix . The null space is the set of vectors for which , which we see is the subspace of spanned by and .  Similarly, is the subspace of having a basis given by and .      Suppose that and and that where . A general polynomial in has the form so that . Therefore, is the set of polynomials for which so that . This shows that .  We also have that       If , then is a subspace of and is a subspace of .    Suppose that and are in . Then we have This shows that is closed under scalar multiplication and vector addition and is therefore a subspace of .  Now suppose the and are in . We know that there are vectors and in such that and . Therefore, This shows that is closed under scalar multiplication and vector addition so is a subspace of .    The next proposition is extremely useful so we will refer to it as the Fundamental Theorem of Linear Maps .   Fundamental Theorem of Linear Maps   If is a finite dimensional vector space and is a linear transformation, then .    Suppose that is a basis for , which we extend to a basis for by adding vectors . We also define .  Given a vector in , we can write so that . This shows that span .  We also claim that forms a linearly independent set. Suppose that , which means that is in so that this vector is a linear combination of . In other words, . Since is a basis for , this set of vectors is linearly independent, which means that . Therefore, the set of vectors is linearly independent and hence a basis for .  This shows that .      The Fundamental Theorem of Linear Maps is familiar from our earlier course where we defined the rank  of a matrix to be its number of pivots. If is an matrix and the linear transformation defined by , we saw that . Therefore, , which is an expression of the Fundamental Theorem of Linear Maps.      Revisiting , we had where and . We saw that so that and that so that . Therefore, .      Suppose .   If , we say that is surjective . In particular, for every in , there is a in such that .    If , we say that is injective . In this case, if , then since , which means that is in .         Once again, these are familiar notions. Suppose that is an matrix that defines a linear transformation . Then is injective if . This happens when the columns of are linearly independent.  The transformation is surjective if , which happens when the columns of span .      The linear transformation defined by is injective but not surjective because the constant polynomials are not in .      A linear transformation is called an isomorphism if is both surjective and injective.    The following proposition follows immediately from the Fundamental Theorem of Linear Maps .    If and are finite dimensional vector spaces and , then   If is surjective, then .    If is injective, then .    If is an isomorphism, then .         Vector space isomorphisms    Consider the linear transformation defined by . If , then . This shows that and . Therefore, is a vector space isomorphism.      If is a vector space, then defined by is a linear transformation called the identity transformation.    Suppose that is an isomorphism, then every vector in has a vector in such that . In fact, there is exactly once such vector since if , we know that because is injective. In this case, we can define a function where is the vector for which .  Notice that is a linear transformation. For instance, if , then , which says that . In the same way, we have .  Therefore, we have the following proposition.    If is an ismorphism, there is a linear transformation such that , the identity transformation on , and , the identity transformation on . We call the inverse of and write .      If is an matrix and by , then is an isomorphism precisely when is invertible. In this case, .      If is a finite dimensional vector space of dimension over the field , then there is an isomorphism .    We choose a basis and define . By the linear independence of the basis, we see that is injective. Since the span of the basis vectors is , we see that is surjective.    The term isomorphism means having the same shape or structure. In other words, isomorphic vector spaces have the same structure. In our earlier courses, we considered only the vector spaces . The previous proposition, , shows us that every finite dimensional real vector space has the same structure as . This means that, technically speaking, we were also studying finite dimensional real vector spaces at the same time.  Notice, however, that the isomorphism in depends on a choice of basis. If two people choose different bases, then they will produce different isomorphisms. In fact, as we move forward, some of our work will be motivated by choosing a basis that creates a particularly nice isomorphism. Our next discussion of matrices will lay that foundation.    Representing linear transformations with matrices  says that every finite dimensional vector space is essentially the same as . Therefore, we are able to represent elements in a vector space as more typical vectors in and linear transformations as matrices. Let us make this more clear now.  Suppose that we have a basis for a finite dimensional vector space . If is an element of , then we can uniquely write . As shorthand, we will write . This should be familiar from our earlier work when we used a basis of to form a new coordinate system.    Consider the vector space with the basis . Then we have . We may think of this as a coordinate system in the vector space of polynomials.    In a similar way, we can represent linear transformations using matrices. Suppose that is a linear transformation and that we have a basis for and a basis for . We then have , which defines an matrix . In the same way we denoted the coordinates of a vector in terms of a basis, we can denote the matrix of the linear transformation . Notice that meaning that the columns of are the coordinates : .  At first glance, this notation may seem a little intimidating, but it will become clear with a little practice.    If is a linear transformation, a basis for and a basis for , we say that the matrix is the matrix associated to with respect to these bases.      Consider where . If we choose the bases and , then .     The next proposition says that the composition of linear transformations corresponds to matrix multiplication.    If and are linear transformations and , , and are bases for , , and , respectively, then .    We denote the vectors in the bases by , , and , respectively. Similarly, we use the shorthand   We have , which implies that Therefore, , which says that as expected.    A similar result holds for the coordinate representations of vectors.    Suppose that is a linear transformation and is a basis for and is a basis for . If is a vector in , then .    An important example is when the linear transformation is the identity and we have two bases and for . In this case, . This matrix then represents the change of coordinates .    Suppose that and that and . Then This matrix converts the coordinate representation of a polynomials in the basis into the coordinate representation of the same polynomial in the basis.  The inverse of this matrix will convert the -coordinate representation of a polynomial into the -coordinate representation: .  Consider the polynomial . We then have and . This means that as is easily checked.    We will often be interested in linear transformations in which the codomain and the domain are the same vector space. In this case, we say that is an operator on .    A linear transformation is called an operator on .    Given a basis for , we can then represent in terms of this basis as where the same basis is used for the codomain and domain. The following shows how the matrices representing the same transformation are represented in two bases.    Suppose that is a linear transformation and that and are two bases for . Then .    Here is a simpler way to represent this statement. If , , and , then we have . This should remind you of the kind of expression we saw when we were diagonalizing matrices and gives some idea for where we are heading. In particular, given an operator on a vector space , we would like to find a basis for so that is relatively simple, such as a diagonal matrix. The expression in can help us do that, even though that expression may look daunting.    Two square matrices and are called similar if there is a matrix such that .    Notice that a matrix is diagonalizable precisely when it is similar to a diagonal matrix.    Similarity is an equivalence relation on the set of matrices.      Suppose that and are similar matrices. If is a basis for and , then for some other basis .    In other words, two similar matrices represent the same linear transformations in two different bases. This is why we should expect that similar matrices should share important properties, such as determinants, eigenvalues, and more.  If and are vector spaces, remember that defined to be the set of linear transformations . We now note that is itself a vector space.    If and are two vector spaces, then is a vector space. Moreover, if is a finite basis for and is a finite basis for , then the function , the vector space of matrices, by is an isomorphism. It then follows that .      Dual spaces  A special case of the vector space of linear transformations from to is when . In this case, we call the dual of .    The vector space of linear transformations is called the dual of and is denoted by . An element of is called a functional on .    Up to this point, we have typically used to denote a linear transformation. However, we often use to represent an element of the dual.    Suppose that . Then is a functional on and hence an element of the dual .  Notice that we can represent this functional in terms of the dot product if we define the vector . Then . We will later understand this example as an illustration of the Riesz Representation Theorem . More generally, any vector in defines a functional by .      If , then is a functional on .    By , we know that is a vector space and that . Therefore, if , we see that as well and given a basis for , we can construct an explicit isomorphism .  Suppose that is a basis for and that is a functional on . If is in , then we can write and hence . This shows that is determined by the vector . We therefore define the isomorphism by . We see that is an isomorphism because it is injective: if , then for all and hence for all vectors . Since is injective and , is also surjective by Fundamental Theorem of Linear Maps .    If is a finite dimensional vector space, the dual space satisfies and an isomorphism is given once we choose a basis for .    Notice that the proof of the previous proposition tells us a bit more. If we have a basis for , then a functional is uniquely determined by its values on the basis .    If is a basis for , then any functional is uniquely determined by .      Consider with basis . Define functionals , , and by . Then any functional with satisfies .  This demonstrates that , , and form a basis for .     "
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
  "id": "definition-l-v-w",
  "level": "2",
  "url": "sec-lt-intro.html#definition-l-v-w",
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
  "id": "example-lt-poly",
  "level": "2",
  "url": "sec-lt-intro.html#example-lt-poly",
  "type": "Example",
  "number": "1.2.11",
  "title": "",
  "body": "  Suppose that and and that where . A general polynomial in has the form so that . Therefore, is the set of polynomials for which so that . This shows that .  We also have that    "
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
  "title": "Fundamental Theorem of Linear Maps.",
  "body": " Fundamental Theorem of Linear Maps   If is a finite dimensional vector space and is a linear transformation, then .    Suppose that is a basis for , which we extend to a basis for by adding vectors . We also define .  Given a vector in , we can write so that . This shows that span .  We also claim that forms a linearly independent set. Suppose that , which means that is in so that this vector is a linear combination of . In other words, . Since is a basis for , this set of vectors is linearly independent, which means that . Therefore, the set of vectors is linearly independent and hence a basis for .  This shows that .   "
},
{
  "id": "sec-lt-intro-4-11",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-11",
  "type": "Example",
  "number": "1.2.14",
  "title": "",
  "body": "  The Fundamental Theorem of Linear Maps is familiar from our earlier course where we defined the rank  of a matrix to be its number of pivots. If is an matrix and the linear transformation defined by , we saw that . Therefore, , which is an expression of the Fundamental Theorem of Linear Maps.   "
},
{
  "id": "sec-lt-intro-4-12",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-12",
  "type": "Example",
  "number": "1.2.15",
  "title": "",
  "body": "  Revisiting , we had where and . We saw that so that and that so that . Therefore, .   "
},
{
  "id": "sec-lt-intro-4-13",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-13",
  "type": "Definition",
  "number": "1.2.16",
  "title": "",
  "body": "  Suppose .   If , we say that is surjective . In particular, for every in , there is a in such that .    If , we say that is injective . In this case, if , then since , which means that is in .      "
},
{
  "id": "sec-lt-intro-4-14",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-14",
  "type": "Example",
  "number": "1.2.17",
  "title": "",
  "body": "  Once again, these are familiar notions. Suppose that is an matrix that defines a linear transformation . Then is injective if . This happens when the columns of are linearly independent.  The transformation is surjective if , which happens when the columns of span .   "
},
{
  "id": "sec-lt-intro-4-15",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-15",
  "type": "Example",
  "number": "1.2.18",
  "title": "",
  "body": "  The linear transformation defined by is injective but not surjective because the constant polynomials are not in .   "
},
{
  "id": "sec-lt-intro-4-16",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-16",
  "type": "Definition",
  "number": "1.2.19",
  "title": "",
  "body": "  A linear transformation is called an isomorphism if is both surjective and injective.   "
},
{
  "id": "sec-lt-intro-4-18",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-18",
  "type": "Proposition",
  "number": "1.2.20",
  "title": "",
  "body": "  If and are finite dimensional vector spaces and , then   If is surjective, then .    If is injective, then .    If is an isomorphism, then .      "
},
{
  "id": "sec-lt-intro-5-2",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-5-2",
  "type": "Example",
  "number": "1.2.21",
  "title": "",
  "body": "  Consider the linear transformation defined by . If , then . This shows that and . Therefore, is a vector space isomorphism.   "
},
{
  "id": "sec-lt-intro-5-3",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-5-3",
  "type": "Example",
  "number": "1.2.22",
  "title": "",
  "body": "  If is a vector space, then defined by is a linear transformation called the identity transformation.   "
},
{
  "id": "sec-lt-intro-5-7",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-5-7",
  "type": "Proposition",
  "number": "1.2.23",
  "title": "",
  "body": "  If is an ismorphism, there is a linear transformation such that , the identity transformation on , and , the identity transformation on . We call the inverse of and write .   "
},
{
  "id": "sec-lt-intro-5-8",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-5-8",
  "type": "Example",
  "number": "1.2.24",
  "title": "",
  "body": "  If is an matrix and by , then is an isomorphism precisely when is invertible. In this case, .   "
},
{
  "id": "prop-fin-dim-isom",
  "level": "2",
  "url": "sec-lt-intro.html#prop-fin-dim-isom",
  "type": "Proposition",
  "number": "1.2.25",
  "title": "",
  "body": "  If is a finite dimensional vector space of dimension over the field , then there is an isomorphism .    We choose a basis and define . By the linear independence of the basis, we see that is injective. Since the span of the basis vectors is , we see that is surjective.   "
},
{
  "id": "sec-lt-intro-6-4",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-6-4",
  "type": "Example",
  "number": "1.2.26",
  "title": "",
  "body": "  Consider the vector space with the basis . Then we have . We may think of this as a coordinate system in the vector space of polynomials.   "
},
{
  "id": "sec-lt-intro-6-7",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-6-7",
  "type": "Definition",
  "number": "1.2.27",
  "title": "",
  "body": "  If is a linear transformation, a basis for and a basis for , we say that the matrix is the matrix associated to with respect to these bases.   "
},
{
  "id": "sec-lt-intro-6-8",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-6-8",
  "type": "Example",
  "number": "1.2.28",
  "title": "",
  "body": "  Consider where . If we choose the bases and , then .   "
},
{
  "id": "sec-lt-intro-6-10",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-6-10",
  "type": "Proposition",
  "number": "1.2.29",
  "title": "",
  "body": "  If and are linear transformations and , , and are bases for , , and , respectively, then .    We denote the vectors in the bases by , , and , respectively. Similarly, we use the shorthand   We have , which implies that Therefore, , which says that as expected.   "
},
{
  "id": "sec-lt-intro-6-12",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-6-12",
  "type": "Proposition",
  "number": "1.2.30",
  "title": "",
  "body": "  Suppose that is a linear transformation and is a basis for and is a basis for . If is a vector in , then .   "
},
{
  "id": "sec-lt-intro-6-14",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-6-14",
  "type": "Example",
  "number": "1.2.31",
  "title": "",
  "body": "  Suppose that and that and . Then This matrix converts the coordinate representation of a polynomials in the basis into the coordinate representation of the same polynomial in the basis.  The inverse of this matrix will convert the -coordinate representation of a polynomial into the -coordinate representation: .  Consider the polynomial . We then have and . This means that as is easily checked.   "
},
{
  "id": "definition-operator",
  "level": "2",
  "url": "sec-lt-intro.html#definition-operator",
  "type": "Definition",
  "number": "1.2.32",
  "title": "",
  "body": "  A linear transformation is called an operator on .   "
},
{
  "id": "prop-matrix-change-basis",
  "level": "2",
  "url": "sec-lt-intro.html#prop-matrix-change-basis",
  "type": "Proposition",
  "number": "1.2.33",
  "title": "",
  "body": "  Suppose that is a linear transformation and that and are two bases for . Then .   "
},
{
  "id": "definition-similar",
  "level": "2",
  "url": "sec-lt-intro.html#definition-similar",
  "type": "Definition",
  "number": "1.2.34",
  "title": "",
  "body": "  Two square matrices and are called similar if there is a matrix such that .   "
},
{
  "id": "sec-lt-intro-6-22",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-6-22",
  "type": "Proposition",
  "number": "1.2.35",
  "title": "",
  "body": "  Similarity is an equivalence relation on the set of matrices.   "
},
{
  "id": "sec-lt-intro-6-23",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-6-23",
  "type": "Proposition",
  "number": "1.2.36",
  "title": "",
  "body": "  Suppose that and are similar matrices. If is a basis for and , then for some other basis .   "
},
{
  "id": "prop-lt-vs",
  "level": "2",
  "url": "sec-lt-intro.html#prop-lt-vs",
  "type": "Proposition",
  "number": "1.2.37",
  "title": "",
  "body": "  If and are two vector spaces, then is a vector space. Moreover, if is a finite basis for and is a finite basis for , then the function , the vector space of matrices, by is an isomorphism. It then follows that .   "
},
{
  "id": "sec-lt-intro-7-3",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-7-3",
  "type": "Definition",
  "number": "1.2.38",
  "title": "",
  "body": "  The vector space of linear transformations is called the dual of and is denoted by . An element of is called a functional on .   "
},
{
  "id": "sec-lt-intro-7-5",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-7-5",
  "type": "Example",
  "number": "1.2.39",
  "title": "",
  "body": "  Suppose that . Then is a functional on and hence an element of the dual .  Notice that we can represent this functional in terms of the dot product if we define the vector . Then . We will later understand this example as an illustration of the Riesz Representation Theorem . More generally, any vector in defines a functional by .   "
},
{
  "id": "sec-lt-intro-7-6",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-7-6",
  "type": "Example",
  "number": "1.2.40",
  "title": "",
  "body": "  If , then is a functional on .   "
},
{
  "id": "sec-lt-intro-7-9",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-7-9",
  "type": "Proposition",
  "number": "1.2.41",
  "title": "",
  "body": "  If is a finite dimensional vector space, the dual space satisfies and an isomorphism is given once we choose a basis for .   "
},
{
  "id": "corollary-functional-basis",
  "level": "2",
  "url": "sec-lt-intro.html#corollary-functional-basis",
  "type": "Corollary",
  "number": "1.2.42",
  "title": "",
  "body": "  If is a basis for , then any functional is uniquely determined by .   "
},
{
  "id": "sec-lt-intro-7-12",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-7-12",
  "type": "Example",
  "number": "1.2.43",
  "title": "",
  "body": "  Consider with basis . Define functionals , , and by . Then any functional with satisfies .  This demonstrates that , , and form a basis for .   "
},
{
  "id": "sec-orthogonal",
  "level": "1",
  "url": "sec-orthogonal.html",
  "type": "Section",
  "number": "1.3",
  "title": "Inner products",
  "body": " Inner products   In our earlier studies, the dot product helped us develop a richer, geometric perspective on some key ideas. In particular, we could use the dot product to detect when vectors are orthogonal, and this led to important ideas, such as least squares and the singular value decomposition.  As we expand our study to consider more general vector spaces, we would like to generalize the dot product so that it applies more generally. This leads us to inner products.    Inner products  On the vector space , we introduced the dot product between two vectors: . One important property is that .  More generally, we had the following properties:   Positivity  with if and only if .   Symmetry  .   Linearity   .     Things are a little different when we are using complex numbers. If is a general complex number, then is not guaranteed to be real, much less nonnegative. To preserve the positivity condition above, remember that the complex conjugate is defined by so that if , we have . We leads us to define the dot product on so that , which means . With this definition, the three properties above still hold except that the symmetry condition is modified to .    If is a vector space, we call an inner product provided that  Positivity  and if and only if .   Conjugate symmetry  .   Linearity  .         If , then is an inner product.  In fact, this is true if as well. If is real, then so the conjugate symmetry condition is the same as the symmetry condition above.      If is the vector space of all polynomials over , then is an inner product as one can check by verifying the positivity, conjugate symmetry, and linearity properties.  This may seem strange when you first see it, but it is just an extension of the usual dot product in some sense. For instance, think of a three-dimensional vector as a function from the set into . The dot product between two vectors is then , so that we multiply the the value of and at each point and add. If we interpret the integral as an infinite sum, this is what the inner product defined above is doing.      Suppose , the vector space of matrices with entries in . If is such a matrix, we define to be its conjugate transpose. That is, . Then is an inner product, where represents the trace of a matrix, the sum of its diagonal entries.  It's relatively straightforward to show that .    It may be useful to note the following consequence of the conjugate symmetry and linearity properties: . That is, .    We refer to a vector space with an inner product as an inner product space .      The length or norm of a vector in an inner product space is .    With this definition, it follows that .    If and are inner product spaces and is a vector space isomorphism such that for all vectors and , we say that is an isometry of vector spaces.      Orthogonality  Since an inner product is the same concept as the dot product extended to vector spaces, we have access to many similar concepts, such as orthogonality.    Two vectors and in an inner product space are orthogonal if .      If , the set of all polynomials, with the inner product given in , then is orthogonal to . This follows because each term in is an odd power of whose integral on the interval will be zero by symmetry.  More generally, any polynomial whose terms are all of odd degree is orthogonal to any polynomial whose terms are all of even degree.     Pythagorean theorem   If and are two orthogonal vectors in an inner product space, then .    The follows from the linearity of the inner product:       In an inner product space, we say that is an orthogonal set if each vector is nonzero and each pair of vectors is orthogonal to one another.      In an inner product space, an orthogonal set is linearly independent.    Suppose that is an orthogonal set and that . If we take the inner product with for any , we have which says that .    From this, we conclude that an orthogonal set forms a basis for a subspace of the inner product space.   Projection formula   Suppose that is an orthogonal set in an inner product space and that is a vector in . The closest vector in to is called the orthogonal projection of onto and is given by .    This is the same expression as the Projection Formula that we frequently used in our previous classes and is found by the same argument.  We first find the vector so that is orthogonal to and then explain why it is the closest vector.  Notice that, by linearity, if a vector is orthogonal to each , then it is orthogonal to every vector in . This is because any vector in is a linear combination of so that and therefore .  We require that be orthogonal to so that or for all . Since is in , it can be expressed as a linear combination of : so that we have , which gives the expression for in the statement of the proposition.  Now suppose that is any other vector in . Then is in and hence orthogonal to . Therefore, by the Pythagoren theorem and hence , which shows that is closer to than any other vector in .     Caution  The Projection Formula only applies when the vectors form an orthogonal set.   The Projection Formula was key to a wide range of useful concepts. In particular, we can apply the Gram-Schmidt algorithm as we did earlier.    A set of vectors is called orthonormal if each pair of vectors is orthogonal and each vector has unit length.     Gram-Schmidt orthogonalization   If is a finite dimensional subspace of an inner product space , then there is an orthonormal basis for .    We choose any basis for and then define and so on. This produces an orthogonal basis for since, at every step, .  Finally, we define to obtain an orthonormal basis for .    Notice that a vector space is a subspace of itself so the previous proposition implies that every finite dimensional vector space has an orthonormal basis.  Also, remember that any linearly independent set in can be extended to a basis of by . If we begin with an orthonormal set of vectors in , we can extend it to a basis of , and apply the Gram-Schmidt algorithm to the added basis vectors to obtain an orthonormal basis of . In other words,    Any orthonormal set in can be extended to an orthonormal basis for .      The Cauchy-Schwarz inequality  When earlier considering the dot product on , we saw that the dot product provided important geometric information: where is the angle between and . Now that we are working with more general inner product spaces, the idea of the angle between two vectors might not have much meaning. However, since , we have , and this relationship holds more generally in an inner product space. It is known as the Cauchy-Scwarz inequality.   Cauchy-Schwarz inequality   If and are two vectors in an inner product space , then .    We first apply the projection formula to find , the orthogonal projection of onto : . We know that and are orthogonal by the construction of the orthogonal projection. Therefore, the Pythagorean theorem applies. .      The adjoint of a linear transformation  We suppose now that and are inner product spaces over a field . If is a linear transformation, we can define its adjoint through the following relationship for every in and in . We can also write this expression as by applying the conjugate symmetry condition twice. The first thing to establish is that is itself an linear transformation.  We will first prove a useful result in the simple case that .   Riesz represenation theorem   Suppose that is an inner product space and is a linear transformation. Then there is a unique vector such that .    If , then we can take as well. This choice of is unique because if is a nonzero vector with for all , then , which means that .  Suppose now that , which means that there is a vector such that . Therefore, is surjective and .  If , we know by the Fundamental Theorem of Linear Maps that . Choose an orthonormal basis for . We know by that we can add a vector to obtain an orthonormal basis. Let .  If is a vector in , then . Then .  To see that is unique, suppose that there are two such vectors and such that for every vector . In particular, we have for every including . Therefore, , which implies that and hence .    The vector in the last proposition can be found explicitly in terms of an orthonormal basis for .    If is an orthonormal basis for and is a functional on , then the vector given in the Riesz Representation Theorem is given by .    Suppose that and that is the vector given in the Riesz Representation Theorem. Notice that , which says that .      If and are inner product spaces and a linear transformation, the adjoint of is defined by by or equivalently .    There are a number of things implied by this definition so we need to check that they are satisfied. The following proposition will take care of this for us.    The adjoint is a linear transformation.    We first need to establish that is a vector in for every in . For a fixed in , define the linear transformation by . By , we know there is a vector in such that . We define , which gives . We have now defined a function such that for all and .   Finally, we need to show that is a linear transformation by verifying that satisfies the two linearity properties. Suppose that and are vectors in . Then Since this holds for any vector , we have .  In the same way, we see that , which verifies that is an operator on .    We now relate the matrices associated to and with respect to an orthonormal basis of . As before, we use to denote an orthonormal basis of .    Suppose that and are inner product spaces with orthonormal bases and , respectively. If is a linear transformation, , and , then , the conjugate transpose of .    If and , then which says that .     Real adjoints  If the underlying field , then the matrix associated to the adjoint is just the transpose of the matrix associated to . In other words, in the notation of .     "
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
  "body": "  If is the vector space of all polynomials over , then is an inner product as one can check by verifying the positivity, conjugate symmetry, and linearity properties.  This may seem strange when you first see it, but it is just an extension of the usual dot product in some sense. For instance, think of a three-dimensional vector as a function from the set into . The dot product between two vectors is then , so that we multiply the the value of and at each point and add. If we interpret the integral as an infinite sum, this is what the inner product defined above is doing.   "
},
{
  "id": "sec-orthogonal-3-8",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-3-8",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": "  Suppose , the vector space of matrices with entries in . If is such a matrix, we define to be its conjugate transpose. That is, . Then is an inner product, where represents the trace of a matrix, the sum of its diagonal entries.  It's relatively straightforward to show that .   "
},
{
  "id": "sec-orthogonal-3-10",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-3-10",
  "type": "Definition",
  "number": "1.3.5",
  "title": "",
  "body": "  We refer to a vector space with an inner product as an inner product space .   "
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
  "body": "  If , the set of all polynomials, with the inner product given in , then is orthogonal to . This follows because each term in is an odd power of whose integral on the interval will be zero by symmetry.  More generally, any polynomial whose terms are all of odd degree is orthogonal to any polynomial whose terms are all of even degree.   "
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
  "body": " Projection formula   Suppose that is an orthogonal set in an inner product space and that is a vector in . The closest vector in to is called the orthogonal projection of onto and is given by .    This is the same expression as the Projection Formula that we frequently used in our previous classes and is found by the same argument.  We first find the vector so that is orthogonal to and then explain why it is the closest vector.  Notice that, by linearity, if a vector is orthogonal to each , then it is orthogonal to every vector in . This is because any vector in is a linear combination of so that and therefore .  We require that be orthogonal to so that or for all . Since is in , it can be expressed as a linear combination of : so that we have , which gives the expression for in the statement of the proposition.  Now suppose that is any other vector in . Then is in and hence orthogonal to . Therefore, by the Pythagoren theorem and hence , which shows that is closer to than any other vector in .   "
},
{
  "id": "sec-orthogonal-4-12",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-4-12",
  "type": "Definition",
  "number": "1.3.14",
  "title": "",
  "body": "  A set of vectors is called orthonormal if each pair of vectors is orthogonal and each vector has unit length.   "
},
{
  "id": "prop-gram-schmidt",
  "level": "2",
  "url": "sec-orthogonal.html#prop-gram-schmidt",
  "type": "Proposition",
  "number": "1.3.15",
  "title": "Gram-Schmidt orthogonalization.",
  "body": " Gram-Schmidt orthogonalization   If is a finite dimensional subspace of an inner product space , then there is an orthonormal basis for .    We choose any basis for and then define and so on. This produces an orthogonal basis for since, at every step, .  Finally, we define to obtain an orthonormal basis for .   "
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
  "id": "prop-cauchy-schwarz",
  "level": "2",
  "url": "sec-orthogonal.html#prop-cauchy-schwarz",
  "type": "Proposition",
  "number": "1.3.17",
  "title": "Cauchy-Schwarz inequality.",
  "body": " Cauchy-Schwarz inequality   If and are two vectors in an inner product space , then .    We first apply the projection formula to find , the orthogonal projection of onto : . We know that and are orthogonal by the construction of the orthogonal projection. Therefore, the Pythagorean theorem applies. .   "
},
{
  "id": "prop-riesz",
  "level": "2",
  "url": "sec-orthogonal.html#prop-riesz",
  "type": "Proposition",
  "number": "1.3.18",
  "title": "Riesz represenation theorem.",
  "body": " Riesz represenation theorem   Suppose that is an inner product space and is a linear transformation. Then there is a unique vector such that .    If , then we can take as well. This choice of is unique because if is a nonzero vector with for all , then , which means that .  Suppose now that , which means that there is a vector such that . Therefore, is surjective and .  If , we know by the Fundamental Theorem of Linear Maps that . Choose an orthonormal basis for . We know by that we can add a vector to obtain an orthonormal basis. Let .  If is a vector in , then . Then .  To see that is unique, suppose that there are two such vectors and such that for every vector . In particular, we have for every including . Therefore, , which implies that and hence .   "
},
{
  "id": "prop-riesz-explicit",
  "level": "2",
  "url": "sec-orthogonal.html#prop-riesz-explicit",
  "type": "Proposition",
  "number": "1.3.19",
  "title": "",
  "body": "  If is an orthonormal basis for and is a functional on , then the vector given in the Riesz Representation Theorem is given by .    Suppose that and that is the vector given in the Riesz Representation Theorem. Notice that , which says that .   "
},
{
  "id": "subsec-adjoint-7",
  "level": "2",
  "url": "sec-orthogonal.html#subsec-adjoint-7",
  "type": "Definition",
  "number": "1.3.20",
  "title": "",
  "body": "  If and are inner product spaces and a linear transformation, the adjoint of is defined by by or equivalently .   "
},
{
  "id": "subsec-adjoint-9",
  "level": "2",
  "url": "sec-orthogonal.html#subsec-adjoint-9",
  "type": "Proposition",
  "number": "1.3.21",
  "title": "",
  "body": "  The adjoint is a linear transformation.    We first need to establish that is a vector in for every in . For a fixed in , define the linear transformation by . By , we know there is a vector in such that . We define , which gives . We have now defined a function such that for all and .   Finally, we need to show that is a linear transformation by verifying that satisfies the two linearity properties. Suppose that and are vectors in . Then Since this holds for any vector , we have .  In the same way, we see that , which verifies that is an operator on .   "
},
{
  "id": "prop-adjoint-matrix",
  "level": "2",
  "url": "sec-orthogonal.html#prop-adjoint-matrix",
  "type": "Proposition",
  "number": "1.3.22",
  "title": "",
  "body": "  Suppose that and are inner product spaces with orthonormal bases and , respectively. If is a linear transformation, , and , then , the conjugate transpose of .    If and , then which says that .   "
},
{
  "id": "sec-polys",
  "level": "1",
  "url": "sec-polys.html",
  "type": "Section",
  "number": "1.4",
  "title": "The minimal polynomial",
  "body": " The minimal polynomial   This section will describe some important properties of polynomials and demonstrate how they might help us understand linear transformations or, more accurately, operators, which are linear transformations from a vector space to itself.  We will begin by studying familiar polynomials, such as you saw in high school algebra. For example, is a quadratic polynomial. Eventually, we will consider polynomials evaluated on an operator . For instance, evaluating on the operator produces a new operator . As a preview for how this may be useful, the polynomial leads to the operator whose null space is the set of eigenvectors associated to the eigenvalue .    Properties of Polynomials  We will be interested in polynomials that depend on a single variable, which will often be . A general polynomial has the form where are the coefficients of and are elements in either or .    The degree of a polynomial is the highest power of whose coefficient is nonzero. For example, the degree of is .    We have already seen that the set of polynomials form a vector space, which means we can multiply polynomials by scalars and we can add them. An additional operation allows us to multiply two polynomials together.    Suppose that and . We multiply polynomials term by term so that More generally, denoting the coefficients of by and the coefficients of by , the coefficients of are .     Properties of polynomial multiplication  Two important properties follow from the general expression for the coefficients of the product given in .   The order in which we multiply polynomials is irrelevant; that is, .    The degree of the product is the sum of the degrees; that is, .      Integers satisfy a property often called the Division Algorithm . Suppose that and are positive integers. Then there are integers and such that where . We say that is the quotient and is the remainder . For example, if and , then . We might say 17 divided by 5 has a quotient of 3 and a remainder of 2.   Polynomials satisfy a similar property also called the Division Algorithm as given in the following proposition.   The Division Algorithm   If and are polynomials, then there are unique polynomials and such that where .      Rather than proving the Division Algorithm for polynomials, we will illustrate with an example. Suppose that and .  To get started, let's consider the highest degree terms in both polynomials. For , it is while for , it is . We'd like to multiply by something to get close to . Since the ratio of the highest degree terms is , we multiply by , which gives .  Now we ask what we should multiply by to realize the term. Since the highest degree term of is , we multiply by . This means that . Since the highest degree term of is , there is nothing we can multiply by to realize the highest degree term of the right hand side. This means that we have so the quotient is and the remainder is .  This algorithm is sometimes called synthetic division and is sometimes taught in high school. We won't be actually be implementing this algorithm, but this example is meant to illustrate why is true. Implementing this algorithm for general polynomials will give a proof of the Division Algorithm.    One important implication of the Division Algorithm is the following fact that we will use quite a bit. Remember that a root of a polynomial is a value for which .   If is a root of the polynomial , then for some polynomial .   The Division Algorithm tells us that . In the notation of the Division Algorithm, and . Therefore , which means that is a constant .  Now we know that , which says that . Therefore, we have .    This proposition shows that there is a relationship between the factors of a polynomial and its roots. Polynomials with complex coefficients are special because the Fundamental Theorem of Algebra tells us that every such polynomial has a root. The proof of this theorem is outside the scope of our course, but is is usually included in a course in complex analysis.   Fundamental Theorem of Algebra   If is a degree polynomial having complex coefficients, then there are roots, , possibly with repetition. This means that .    While this important theorem only holds for polynomials with complex coefficients, we can deduce something about polynomials with real coefficients. For instance, if is a polynomial with real coefficients and is a complex, non-real root, then so is its complex conjugate . This follows because . We have where and . Since this quadratic polynomial does not have real roots, we know from the quadratic formula that . Therefore,    If is a polynomial with real coefficients, there are real roots such that where for .    As mentioned in the introduction to this section, our interest in polynomials stems from the insights we gain when we evaluate a polynomial on an operator . For instance, if , then a new operator. Notice that we consider the constant term to be multiplied by the identify transformation .    Consider the operator by where . If , then . This means that is the operator represented by the matrix .      Invariant subspaces  As we begin to study operators, the concept of an invariant subspace will be helpful. In particular, finding invariant subspaces will frequently help us reduce our focus from an entire vector space to a smaller subspace so that we can more easily draw conclusions.    If is a vector subspace of and an operator, we say that is invariant under if for all . We frequently say that is -invariant.      If is an operator and , we say that is an eigenvector of with associated eigenvalue  . This is the same concept that we explored with matrices.  The eigensapce associated to the eigenvalue , , which consists of all the eigenvectors of is a -invariant subspace. In particular, if is in , then , which is also in .      Consider the operator , which rotates vectors by around the -axis. The -axis forms an invariant subspace since it is equal to .  Moreover, the set of vectors forms a two-dimensional -invariant subspace since any vector in that plane is rotated to another vector in the same plane.      Suppose that , the vector space of polynomials of degree 8 or less, and that by . Then is a -invariant subspace because the derivative of any degree five polynomial has a degree less than five.      Suppose that is an operator. Then is a -invariant subspace. For example, if is in , then , which is also in .  Furthermore, is also -invariant. If , then is in by the definition of .      Any operator will have two invariant subspaces, namely and itself.    Remember that the order in which we multiply polynomials is not important. In particular, . This leads to the following important proposition.    If is a polynomial and an operator on a vector space , then both and are -invariant subspaces of .    Consider the polynomial so that . This means that .  Suppose that is in , which means that . We need to explain why is also in , which leads us to .  Similarly, if is in , then there is a vector so that . Then , which shows that is also in . Therefore, is an invariant subspace of .      Consider the operator by with . Consider also the polynomial so that the operator is represented by the matrix .  Notice that the reduced row echelon form of is . First considering , we find a basis consisting of the first and third columns of : . We can check that . This shows that is -invariant since and lie in .  We also have a basis for consisting of vectors . We can check that . Once again, this shows that is -invariant.      The minimal polynomial of a vector  We are approaching a result that will be crucial for our upcoming explorations. First, we need to make the following definition clear.   A monic polynomial is a polynomial where the coefficient of the highest degree term is .   For instance, is a monic polynomial, but is not.   The minimal polynomial of an operator applied to a vector   Suppose that is an operator on a finite dimensional vector space and that is a vector in . There is a unique monic polynomial such that   .    has the smallest possible possible degree among polynomials for which .    .       Consider the sequence of vectors formed by repeatedly applying to : . Because is finite dimensional, this set of vectors will eventually become linearly dependent. Suppose that is the smallest integer for which is a linear combination of the earlier vectors in the list. This means that . Therefore, is a monic polynomial for which .  Since the vectors are linearly independent, there can be no polynomial whose degree is smaller than such that .  Moreover, if there is another monic polynomial of degree such that , then is a polynomial whose degree is smaller than and that satisfies , but the argument of the previous paragraph shows that this cannot happen. Therefore, , which shows that is the unique monic polynomial of smallest degree satisfying .  We must have since if , then the set of vectors has vectors and hence must be linearly dependent.      The polynomial is sometimes called the annihilating polynomial of , since , or the minimal polynomial of applied to .       We will revisit and the operator defined by where . Suppose that and consider the vectors . Since this is a set of five vectors in , we are guaranteed that this set is linearly dependent. Putting these five vectors into a matrix and row reducing, we have .  This shows, in particular, that so that . Since and are linearly independent, the minimal polynomial cannot have degree one or less. Therefore, .      If is an eigenvector of with associated eigenvalue , then so that .    The construction in this proof will be important when we investigate numerical linear algebra later on this course.   Krylov subspace   Given an operator on a finite dimensional vector space and a vector , we define , the  Krylov subspace .    We see that so that the set of inclusions eventually stablizes when reaches the degree of the minimal polynomial of . This integer is sometimes called the grade of . When the grade of a vector is one, that vector must be an eigenvector of .    The minimal polynomial of an operator  While we will see that the minimal polynomial of a vector is useful, we can take this idea a bit further and find a polynomial that annihilates every vector in . This will be called the minimal polynomial of the operator  . Rather than starting with a proof of the theorem, let's illustrate the idea by continuing our earlier example from .   The minimal polynomial of an operator  Remember the setup from . We have the operator defined by where . With the vector , we found that .  We know that annihilates , meaning that . But also annihilates since , which means that annihilates any vector in the two-dimensional Krylov subspace . We would like to find a polynomial that annihilates every vector in .  To do this, will consider the subspace . By , is a -invariant subspace of . In fact, we can find a basis for . We see that the matrix representing is . This shows that a basis for is .  Now that we know that is a -invariant subspace and we find that . By , we mean the operator restricted to ; that is by . If we call the basis for  , we have .  Now we will choose a vector (think of this as being randomly chosen) and find the annihilating polynomial for . We have , which means that . In other words, is the annihilating polynomial of for the operator .  In fact, this polynomial annihilates every vector in because we find that .  Notice what happens if we multiply . Suppose that is any vector in . Then . But notice that is in and that annihilates every vector in . This means that so that annihilates every vector in .  In fact, this polynomial is what we will call the minimal polynomial of . This example illustrates the proof of the theorem that we are about to give.    The minimal polynomial of an operator   Suppose that is a finite-dimensional vector space over either or and that is an operator on . There is a unique monic polynomial of smallest degree such that . Moreover, . We call this polynomial the minimal polynomial of .    Our proof proceeds by induction on the dimension of . To begin, suppose that , which means that for some vector . Then for some , which is possibly . Then , which means that since spans . Therefore, if , we have .  Now suppose that and that the theorem has been verified for all operators on vector spaces of dimension less than . Following our work in , we choose a nonzero vector and find its minimal polynomial . This polynomial will have degree .  Since is -invariant and is in , it follows that are all in . Since these vectors are linearly independent, we have .  Now we focus on , which we know is -invariant by . Moreover, by the Fundamental Theorem of Linear Maps , we know that  . This says that the induction hypothesis applies to the operator so that there is a minimal polynomial, which we will denote by so that . Moreover, by the induction hypothesis, this polynomial is monic and .  We call and note that . Moreover, if is any vector in , it follows that is a vector in so that . That is, annihilates every vector in so that .  This shows that there is a monic polynomial such that on and . Therefore, there is some possibly different polynomial having the smallest degree among all such polynomials, and this is the minimal polynomial of the operator on .  To see that this polynomial is unique, suppose there are two monic polynomials and having smallest degree and and . If we consider , we see that since the highest degree terms of and have coefficients and therefore cancel. Also, . However, this is impossible since and had the smallest possible degree among all polynomials that vanish when evaluated on . This means that , which guarantees the uniqueness of the minimal polynomial.      Returning to our earlier example where by with . If we choose . We have . This says that . One can now check that so that the minimal polynomial of is in fact . This is, of course, the same polynomial we found earlier. For most vectors , we will find that the minimal polynomial of the operator is .      Consider the matrix and the linear operator that it defines. Notice that so if , then . The minimal polynomial of is therefore .  More generally, suppose that the minimal polynomial of an operator has degree . Since the minimal polynomial is monic, this means that . Because , we see that , a multiple of the identity.      By contrast, consider the matrix and the linear operator that it defines with respect to some basis. The degree of the minimal polynomial must be at least 2 since is not a multiple of the identity matrix. Notice, however, that and . This says that and so the minimal polynomial of is .    Both of the matrices in the two previous examples are upper triangular. Remembering that the eigenvalues of an upper triangular matrix are the entries on the diagonal, we see that the roots of the minimal polynomials in both cases are the eigenvalues of the operator. This gives some indication of the importance of the minimal polynomial, as we will see now.  The fact that the minimal polynomial has the smallest degree among all polynomials for which has some important consequences.    The set of roots of the minimal polynomial of equals the set of eigenvalues of .    Suppose that is the minimal polynomial of . We need to explain two things: that any eigenvalue of is a root of and that any root of is an eigenvalue of .  Suppose that is an eigenvalue of . This means that there is a nonzero vector such that and therefore for every . This means that , which implies that . Therefore, is a root of , the minimal polynomial of .  Conversely, suppose that is a root of . By , this means that . This says that However, since , which implies there is some vector for which . Therefore, , which shows that is an eigenvector with associated eigenvalue .    This is the most significant fact about the minimal polynomial: that its roots are the eigenvalues of the operator. We'll put this to use in the next section. Before that, however, here are two other useful facts.    If is a polynomial for which , then is a multiple of the minimal polynomial of .    If is the minimal polynomial of , then we can apply the Division Algorithm to write where . Furthermore, , which implies that . Since has the smallest degree among all polynomials that vanish when evaluated on and has a smaller degree than , we know that . Therefore, .      If is an operator on the vector space and is a subspace of that is invariant under , then the minimal polynomial of is a multiple of the minimal polynomial of .    Suppose that is the minimal polynomial of and is the minimal polynomial of on . This means that for every vector in and so . We also know that is the minimal polynomial of so by , we know that is a multiple of .     "
},
{
  "id": "definition-degree",
  "level": "2",
  "url": "sec-polys.html#definition-degree",
  "type": "Definition",
  "number": "1.4.1",
  "title": "",
  "body": "  The degree of a polynomial is the highest power of whose coefficient is nonzero. For example, the degree of is .   "
},
{
  "id": "example-poly-product",
  "level": "2",
  "url": "sec-polys.html#example-poly-product",
  "type": "Example",
  "number": "1.4.2",
  "title": "",
  "body": "  Suppose that and . We multiply polynomials term by term so that More generally, denoting the coefficients of by and the coefficients of by , the coefficients of are .   "
},
{
  "id": "prop-poly-division",
  "level": "2",
  "url": "sec-polys.html#prop-poly-division",
  "type": "Proposition",
  "number": "1.4.3",
  "title": "The Division Algorithm.",
  "body": " The Division Algorithm   If and are polynomials, then there are unique polynomials and such that where .   "
},
{
  "id": "sec-polys-3-10",
  "level": "2",
  "url": "sec-polys.html#sec-polys-3-10",
  "type": "Example",
  "number": "1.4.4",
  "title": "",
  "body": "  Rather than proving the Division Algorithm for polynomials, we will illustrate with an example. Suppose that and .  To get started, let's consider the highest degree terms in both polynomials. For , it is while for , it is . We'd like to multiply by something to get close to . Since the ratio of the highest degree terms is , we multiply by , which gives .  Now we ask what we should multiply by to realize the term. Since the highest degree term of is , we multiply by . This means that . Since the highest degree term of is , there is nothing we can multiply by to realize the highest degree term of the right hand side. This means that we have so the quotient is and the remainder is .  This algorithm is sometimes called synthetic division and is sometimes taught in high school. We won't be actually be implementing this algorithm, but this example is meant to illustrate why is true. Implementing this algorithm for general polynomials will give a proof of the Division Algorithm.   "
},
{
  "id": "prop-root-factor",
  "level": "2",
  "url": "sec-polys.html#prop-root-factor",
  "type": "Proposition",
  "number": "1.4.5",
  "title": "",
  "body": " If is a root of the polynomial , then for some polynomial .   The Division Algorithm tells us that . In the notation of the Division Algorithm, and . Therefore , which means that is a constant .  Now we know that , which says that . Therefore, we have .   "
},
{
  "id": "thm-fta",
  "level": "2",
  "url": "sec-polys.html#thm-fta",
  "type": "Theorem",
  "number": "1.4.6",
  "title": "Fundamental Theorem of Algebra.",
  "body": " Fundamental Theorem of Algebra   If is a degree polynomial having complex coefficients, then there are roots, , possibly with repetition. This means that .   "
},
{
  "id": "sec-polys-3-16",
  "level": "2",
  "url": "sec-polys.html#sec-polys-3-16",
  "type": "Proposition",
  "number": "1.4.7",
  "title": "",
  "body": "  If is a polynomial with real coefficients, there are real roots such that where for .   "
},
{
  "id": "sec-polys-3-18",
  "level": "2",
  "url": "sec-polys.html#sec-polys-3-18",
  "type": "Example",
  "number": "1.4.8",
  "title": "",
  "body": "  Consider the operator by where . If , then . This means that is the operator represented by the matrix .   "
},
{
  "id": "sec-polys-4-3",
  "level": "2",
  "url": "sec-polys.html#sec-polys-4-3",
  "type": "Definition",
  "number": "1.4.9",
  "title": "",
  "body": "  If is a vector subspace of and an operator, we say that is invariant under if for all . We frequently say that is -invariant.   "
},
{
  "id": "sec-polys-4-4",
  "level": "2",
  "url": "sec-polys.html#sec-polys-4-4",
  "type": "Example",
  "number": "1.4.10",
  "title": "",
  "body": "  If is an operator and , we say that is an eigenvector of with associated eigenvalue  . This is the same concept that we explored with matrices.  The eigensapce associated to the eigenvalue , , which consists of all the eigenvectors of is a -invariant subspace. In particular, if is in , then , which is also in .   "
},
{
  "id": "sec-polys-4-5",
  "level": "2",
  "url": "sec-polys.html#sec-polys-4-5",
  "type": "Example",
  "number": "1.4.11",
  "title": "",
  "body": "  Consider the operator , which rotates vectors by around the -axis. The -axis forms an invariant subspace since it is equal to .  Moreover, the set of vectors forms a two-dimensional -invariant subspace since any vector in that plane is rotated to another vector in the same plane.   "
},
{
  "id": "sec-polys-4-6",
  "level": "2",
  "url": "sec-polys.html#sec-polys-4-6",
  "type": "Example",
  "number": "1.4.12",
  "title": "",
  "body": "  Suppose that , the vector space of polynomials of degree 8 or less, and that by . Then is a -invariant subspace because the derivative of any degree five polynomial has a degree less than five.   "
},
{
  "id": "sec-polys-4-7",
  "level": "2",
  "url": "sec-polys.html#sec-polys-4-7",
  "type": "Example",
  "number": "1.4.13",
  "title": "",
  "body": "  Suppose that is an operator. Then is a -invariant subspace. For example, if is in , then , which is also in .  Furthermore, is also -invariant. If , then is in by the definition of .   "
},
{
  "id": "sec-polys-4-8",
  "level": "2",
  "url": "sec-polys.html#sec-polys-4-8",
  "type": "Example",
  "number": "1.4.14",
  "title": "",
  "body": "  Any operator will have two invariant subspaces, namely and itself.   "
},
{
  "id": "prop-poly-invariant-subspaces",
  "level": "2",
  "url": "sec-polys.html#prop-poly-invariant-subspaces",
  "type": "Proposition",
  "number": "1.4.15",
  "title": "",
  "body": "  If is a polynomial and an operator on a vector space , then both and are -invariant subspaces of .    Consider the polynomial so that . This means that .  Suppose that is in , which means that . We need to explain why is also in , which leads us to .  Similarly, if is in , then there is a vector so that . Then , which shows that is also in . Therefore, is an invariant subspace of .   "
},
{
  "id": "example-nul-range-invariant",
  "level": "2",
  "url": "sec-polys.html#example-nul-range-invariant",
  "type": "Example",
  "number": "1.4.16",
  "title": "",
  "body": "  Consider the operator by with . Consider also the polynomial so that the operator is represented by the matrix .  Notice that the reduced row echelon form of is . First considering , we find a basis consisting of the first and third columns of : . We can check that . This shows that is -invariant since and lie in .  We also have a basis for consisting of vectors . We can check that . Once again, this shows that is -invariant.   "
},
{
  "id": "sec-polys-5-3",
  "level": "2",
  "url": "sec-polys.html#sec-polys-5-3",
  "type": "Definition",
  "number": "1.4.17",
  "title": "",
  "body": " A monic polynomial is a polynomial where the coefficient of the highest degree term is .  "
},
{
  "id": "thm-minimal-polynomial-vector",
  "level": "2",
  "url": "sec-polys.html#thm-minimal-polynomial-vector",
  "type": "Theorem",
  "number": "1.4.18",
  "title": "The minimal polynomial of an operator applied to a vector.",
  "body": " The minimal polynomial of an operator applied to a vector   Suppose that is an operator on a finite dimensional vector space and that is a vector in . There is a unique monic polynomial such that   .    has the smallest possible possible degree among polynomials for which .    .       Consider the sequence of vectors formed by repeatedly applying to : . Because is finite dimensional, this set of vectors will eventually become linearly dependent. Suppose that is the smallest integer for which is a linear combination of the earlier vectors in the list. This means that . Therefore, is a monic polynomial for which .  Since the vectors are linearly independent, there can be no polynomial whose degree is smaller than such that .  Moreover, if there is another monic polynomial of degree such that , then is a polynomial whose degree is smaller than and that satisfies , but the argument of the previous paragraph shows that this cannot happen. Therefore, , which shows that is the unique monic polynomial of smallest degree satisfying .  We must have since if , then the set of vectors has vectors and hence must be linearly dependent.   "
},
{
  "id": "sec-polys-5-6",
  "level": "2",
  "url": "sec-polys.html#sec-polys-5-6",
  "type": "Definition",
  "number": "1.4.19",
  "title": "",
  "body": "  The polynomial is sometimes called the annihilating polynomial of , since , or the minimal polynomial of applied to .    "
},
{
  "id": "example-nul-range-invariant-2",
  "level": "2",
  "url": "sec-polys.html#example-nul-range-invariant-2",
  "type": "Example",
  "number": "1.4.20",
  "title": "",
  "body": "  We will revisit and the operator defined by where . Suppose that and consider the vectors . Since this is a set of five vectors in , we are guaranteed that this set is linearly dependent. Putting these five vectors into a matrix and row reducing, we have .  This shows, in particular, that so that . Since and are linearly independent, the minimal polynomial cannot have degree one or less. Therefore, .   "
},
{
  "id": "sec-polys-5-8",
  "level": "2",
  "url": "sec-polys.html#sec-polys-5-8",
  "type": "Example",
  "number": "1.4.21",
  "title": "",
  "body": "  If is an eigenvector of with associated eigenvalue , then so that .   "
},
{
  "id": "definition-krylov",
  "level": "2",
  "url": "sec-polys.html#definition-krylov",
  "type": "Definition",
  "number": "1.4.22",
  "title": "Krylov subspace.",
  "body": " Krylov subspace   Given an operator on a finite dimensional vector space and a vector , we define , the  Krylov subspace .   "
},
{
  "id": "sec-polys-5-11",
  "level": "2",
  "url": "sec-polys.html#sec-polys-5-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "grade "
},
{
  "id": "example-minimal-polynomial",
  "level": "2",
  "url": "sec-polys.html#example-minimal-polynomial",
  "type": "Example",
  "number": "1.4.23",
  "title": "The minimal polynomial of an operator.",
  "body": " The minimal polynomial of an operator  Remember the setup from . We have the operator defined by where . With the vector , we found that .  We know that annihilates , meaning that . But also annihilates since , which means that annihilates any vector in the two-dimensional Krylov subspace . We would like to find a polynomial that annihilates every vector in .  To do this, will consider the subspace . By , is a -invariant subspace of . In fact, we can find a basis for . We see that the matrix representing is . This shows that a basis for is .  Now that we know that is a -invariant subspace and we find that . By , we mean the operator restricted to ; that is by . If we call the basis for  , we have .  Now we will choose a vector (think of this as being randomly chosen) and find the annihilating polynomial for . We have , which means that . In other words, is the annihilating polynomial of for the operator .  In fact, this polynomial annihilates every vector in because we find that .  Notice what happens if we multiply . Suppose that is any vector in . Then . But notice that is in and that annihilates every vector in . This means that so that annihilates every vector in .  In fact, this polynomial is what we will call the minimal polynomial of . This example illustrates the proof of the theorem that we are about to give.  "
},
{
  "id": "thm-minimal-polynomial",
  "level": "2",
  "url": "sec-polys.html#thm-minimal-polynomial",
  "type": "Theorem",
  "number": "1.4.24",
  "title": "The minimal polynomial of an operator.",
  "body": " The minimal polynomial of an operator   Suppose that is a finite-dimensional vector space over either or and that is an operator on . There is a unique monic polynomial of smallest degree such that . Moreover, . We call this polynomial the minimal polynomial of .    Our proof proceeds by induction on the dimension of . To begin, suppose that , which means that for some vector . Then for some , which is possibly . Then , which means that since spans . Therefore, if , we have .  Now suppose that and that the theorem has been verified for all operators on vector spaces of dimension less than . Following our work in , we choose a nonzero vector and find its minimal polynomial . This polynomial will have degree .  Since is -invariant and is in , it follows that are all in . Since these vectors are linearly independent, we have .  Now we focus on , which we know is -invariant by . Moreover, by the Fundamental Theorem of Linear Maps , we know that  . This says that the induction hypothesis applies to the operator so that there is a minimal polynomial, which we will denote by so that . Moreover, by the induction hypothesis, this polynomial is monic and .  We call and note that . Moreover, if is any vector in , it follows that is a vector in so that . That is, annihilates every vector in so that .  This shows that there is a monic polynomial such that on and . Therefore, there is some possibly different polynomial having the smallest degree among all such polynomials, and this is the minimal polynomial of the operator on .  To see that this polynomial is unique, suppose there are two monic polynomials and having smallest degree and and . If we consider , we see that since the highest degree terms of and have coefficients and therefore cancel. Also, . However, this is impossible since and had the smallest possible degree among all polynomials that vanish when evaluated on . This means that , which guarantees the uniqueness of the minimal polynomial.   "
},
{
  "id": "sec-polys-6-5",
  "level": "2",
  "url": "sec-polys.html#sec-polys-6-5",
  "type": "Example",
  "number": "1.4.25",
  "title": "",
  "body": "  Returning to our earlier example where by with . If we choose . We have . This says that . One can now check that so that the minimal polynomial of is in fact . This is, of course, the same polynomial we found earlier. For most vectors , we will find that the minimal polynomial of the operator is .   "
},
{
  "id": "example-min-poly-1",
  "level": "2",
  "url": "sec-polys.html#example-min-poly-1",
  "type": "Example",
  "number": "1.4.26",
  "title": "",
  "body": "  Consider the matrix and the linear operator that it defines. Notice that so if , then . The minimal polynomial of is therefore .  More generally, suppose that the minimal polynomial of an operator has degree . Since the minimal polynomial is monic, this means that . Because , we see that , a multiple of the identity.   "
},
{
  "id": "example-min-poly-2",
  "level": "2",
  "url": "sec-polys.html#example-min-poly-2",
  "type": "Example",
  "number": "1.4.27",
  "title": "",
  "body": "  By contrast, consider the matrix and the linear operator that it defines with respect to some basis. The degree of the minimal polynomial must be at least 2 since is not a multiple of the identity matrix. Notice, however, that and . This says that and so the minimal polynomial of is .   "
},
{
  "id": "prop-min-poly-roots",
  "level": "2",
  "url": "sec-polys.html#prop-min-poly-roots",
  "type": "Proposition",
  "number": "1.4.28",
  "title": "",
  "body": "  The set of roots of the minimal polynomial of equals the set of eigenvalues of .    Suppose that is the minimal polynomial of . We need to explain two things: that any eigenvalue of is a root of and that any root of is an eigenvalue of .  Suppose that is an eigenvalue of . This means that there is a nonzero vector such that and therefore for every . This means that , which implies that . Therefore, is a root of , the minimal polynomial of .  Conversely, suppose that is a root of . By , this means that . This says that However, since , which implies there is some vector for which . Therefore, , which shows that is an eigenvector with associated eigenvalue .   "
},
{
  "id": "prop-min-poly-div",
  "level": "2",
  "url": "sec-polys.html#prop-min-poly-div",
  "type": "Proposition",
  "number": "1.4.29",
  "title": "",
  "body": "  If is a polynomial for which , then is a multiple of the minimal polynomial of .    If is the minimal polynomial of , then we can apply the Division Algorithm to write where . Furthermore, , which implies that . Since has the smallest degree among all polynomials that vanish when evaluated on and has a smaller degree than , we know that . Therefore, .   "
},
{
  "id": "prop-min-poly-subspace",
  "level": "2",
  "url": "sec-polys.html#prop-min-poly-subspace",
  "type": "Proposition",
  "number": "1.4.30",
  "title": "",
  "body": "  If is an operator on the vector space and is a subspace of that is invariant under , then the minimal polynomial of is a multiple of the minimal polynomial of .    Suppose that is the minimal polynomial of and is the minimal polynomial of on . This means that for every vector in and so . We also know that is the minimal polynomial of so by , we know that is a multiple of .   "
},
{
  "id": "sec-upper",
  "level": "1",
  "url": "sec-upper.html",
  "type": "Section",
  "number": "2.1",
  "title": "Upper triangular matrices",
  "body": " Upper triangular matrices   In this section, we will use our understanding of the minimal polynomial to find some standard forms for matrices of operators. First, we will consider upper triangular matrices.   As we have seen in the past, upper triangular matrices have some simple properties. For one, the eigenvalues of the associated operator equal the diagonal elements of the matrix. We have also seen that linear systems formed by triangular matrices are relatively easy to solve. All told, they form a pleasant set of matrices.  Remember that an upper triangular matrix is one whose entries are zero below the diagonal; that is, they have a form like this: . Suppose that is an operator and that there is a basis for which the associated matrix for is upper triangular. Since if , we have and so forth.  Notice that says that so that is an eigenvector with associated eigenvalue .  In addition, tells us that , which implies that is invariant under .  More generally, , which says that, for every , is invariant under .  Let's record this as a proposition.    Suppose that is an operator on the vector space . Then there is a basis for in which the associated matrix of is upper triangular if and only if is invariant under for each .    The discussion above explains why an operator with an upper triangular matrix forms invariant subspaces. Conversely, suppose that is invariant for every . The matrix associated to satisfies , which shows that if and that is therefore upper triangular.    We can rephrase this in terms of polynomials.    Suppose that is an operator on and that there is a basis of such that the matrix of is upper triangular. Then .    We will use to denote the polynomial .  First consider . Since is upper triangular, we know that , which means that . Therefore, .  Next consider for . Rearranging gives . Therefore, , which tells us that .  Continuing in this way, we see that and hence that . This means that for every vector and so we know that as claimed.    This leads to the following crucial result.    Suppose that is an operator on over the field . There is a basis for for which the matrix of is upper triangular if and only if the minimal polynomial of has the form where the roots are in .  Moreover, when this happens, the diagonal entries of the matrix are the eigenvalues of .    One direction is a natural consequence of . Suppose that there is a basis for which the matrix of is upper triangular. That proposition tells us that for . Since , tells us that is a multiple of the minimal polynomial of , which says that the minimal polynomial has the form given in the statement of this theorem. Because the eigenvalues are the roots of the minimal polynomial, we also know that the diagonal entries of the matrix are the eigenvalues.  Now suppose that the minimal polynomial has the form given. We will prove by induction that there is a basis for which the matrix of is upper triangular.  First suppose that so that . This means that so that the matrix of in any basis is diagonal and hence upper triangular. Notice that the diagonal entries of this matrix are , which is an eigenvalue of .  Let's now suppose that the result is true for any operator and vector space for which the minimal polynomial has the form where . Consider the subspace , which we know is invariant under . Since any vector in has the form , we know that . Therefore, if , then . As a result, is a multiple of the minimal polynomial of and so the minimal polynomial of is a product of fewer than terms having the form . By the induction hypothesis, we know there is a basis for so that the basis of is upper triangular.  We will now extend the basis of by vectors . Since is in , we have or , which shows that the matrix of is upper triangular. Furthermore, the diagonal entry of the matrix associated to is , which shows that the diagonal entries of the matrix are the eigenvalues of .    Notice that the Fundamental Theorem of Algebra\" tells us that any polynomial with complex coefficients has the form given in . As a result, any operator on a complex vector space has a basis for which the associated matrix is upper triangular.    If is an operator on a finite dimensional complex vector space , then there is a basis for such that is upper triangular.      Let's consider the operator defined by the matrix . The minimal polynomial of is , which satisfies the hypothesis of . Therefore, there is a basis so that is upper triangular. We will find such a basis following the proof of the theorem.  Consider one factor of the minimal polynomial of and construct . We see that . This shows that a basis for consists of the vectors . We have so that the matrix represents in this basis.  Of course, we know that the minimal polynomial of is so we consider the operator on , which is represented by the matrix in this basis. Therefore, a basis for is . We note that , as expected since the minimial polynomial of is .  We will now work our way back out to find a basis for . We have so we will take . (There are lots of possible choices since we just need to choose a vector in that is not a scalar multiple of .) Notice that .  We just need to find a vector so that forms a basis for . Again, there are lots of possibilities so we choose . We see that .  If we call the basis , then , which shows that we have found an upper triangular matrix representing .  Thinking in terms of matrices, we construct and find that our original matrix . In other words, we have demonstrated that is similar to an upper triangular matrix, as predicted by .    "
},
{
  "id": "prop-upper-invariant",
  "level": "2",
  "url": "sec-upper.html#prop-upper-invariant",
  "type": "Proposition",
  "number": "2.1.1",
  "title": "",
  "body": "  Suppose that is an operator on the vector space . Then there is a basis for in which the associated matrix of is upper triangular if and only if is invariant under for each .    The discussion above explains why an operator with an upper triangular matrix forms invariant subspaces. Conversely, suppose that is invariant for every . The matrix associated to satisfies , which shows that if and that is therefore upper triangular.   "
},
{
  "id": "prop-upper-min",
  "level": "2",
  "url": "sec-upper.html#prop-upper-min",
  "type": "Proposition",
  "number": "2.1.2",
  "title": "",
  "body": "  Suppose that is an operator on and that there is a basis of such that the matrix of is upper triangular. Then .    We will use to denote the polynomial .  First consider . Since is upper triangular, we know that , which means that . Therefore, .  Next consider for . Rearranging gives . Therefore, , which tells us that .  Continuing in this way, we see that and hence that . This means that for every vector and so we know that as claimed.   "
},
{
  "id": "thm-upper-minimal",
  "level": "2",
  "url": "sec-upper.html#thm-upper-minimal",
  "type": "Theorem",
  "number": "2.1.3",
  "title": "",
  "body": "  Suppose that is an operator on over the field . There is a basis for for which the matrix of is upper triangular if and only if the minimal polynomial of has the form where the roots are in .  Moreover, when this happens, the diagonal entries of the matrix are the eigenvalues of .    One direction is a natural consequence of . Suppose that there is a basis for which the matrix of is upper triangular. That proposition tells us that for . Since , tells us that is a multiple of the minimal polynomial of , which says that the minimal polynomial has the form given in the statement of this theorem. Because the eigenvalues are the roots of the minimal polynomial, we also know that the diagonal entries of the matrix are the eigenvalues.  Now suppose that the minimal polynomial has the form given. We will prove by induction that there is a basis for which the matrix of is upper triangular.  First suppose that so that . This means that so that the matrix of in any basis is diagonal and hence upper triangular. Notice that the diagonal entries of this matrix are , which is an eigenvalue of .  Let's now suppose that the result is true for any operator and vector space for which the minimal polynomial has the form where . Consider the subspace , which we know is invariant under . Since any vector in has the form , we know that . Therefore, if , then . As a result, is a multiple of the minimal polynomial of and so the minimal polynomial of is a product of fewer than terms having the form . By the induction hypothesis, we know there is a basis for so that the basis of is upper triangular.  We will now extend the basis of by vectors . Since is in , we have or , which shows that the matrix of is upper triangular. Furthermore, the diagonal entry of the matrix associated to is , which shows that the diagonal entries of the matrix are the eigenvalues of .   "
},
{
  "id": "prop-complex-upper",
  "level": "2",
  "url": "sec-upper.html#prop-complex-upper",
  "type": "Proposition",
  "number": "2.1.4",
  "title": "",
  "body": "  If is an operator on a finite dimensional complex vector space , then there is a basis for such that is upper triangular.   "
},
{
  "id": "sec-upper-16",
  "level": "2",
  "url": "sec-upper.html#sec-upper-16",
  "type": "Example",
  "number": "2.1.5",
  "title": "",
  "body": "  Let's consider the operator defined by the matrix . The minimal polynomial of is , which satisfies the hypothesis of . Therefore, there is a basis so that is upper triangular. We will find such a basis following the proof of the theorem.  Consider one factor of the minimal polynomial of and construct . We see that . This shows that a basis for consists of the vectors . We have so that the matrix represents in this basis.  Of course, we know that the minimal polynomial of is so we consider the operator on , which is represented by the matrix in this basis. Therefore, a basis for is . We note that , as expected since the minimial polynomial of is .  We will now work our way back out to find a basis for . We have so we will take . (There are lots of possible choices since we just need to choose a vector in that is not a scalar multiple of .) Notice that .  We just need to find a vector so that forms a basis for . Again, there are lots of possibilities so we choose . We see that .  If we call the basis , then , which shows that we have found an upper triangular matrix representing .  Thinking in terms of matrices, we construct and find that our original matrix . In other words, we have demonstrated that is similar to an upper triangular matrix, as predicted by .   "
},
{
  "id": "sec-spectral",
  "level": "1",
  "url": "sec-spectral.html",
  "type": "Section",
  "number": "2.2",
  "title": "The Spectral Theorem",
  "body": " The Spectral Theorem   In , we saw conditions that enable us to represent a linear transformation as an upper triangular matrix. This is our first theorem about a standard form, and it puts us in a position to prove an important result that we used earlier called the Spectral Theorem.   The version of the Spectral Theorem that we saw concerns real symmetric matrices, which are square matrices for which . This necessarily means that we are working in an inner product space so we will first extend our results on upper triangular matrices to operators on inner product spaces.    The Schur decomposition  We will first consider complex vector spaces. In particular, suppose that is a finite-dimensional complex inner product space and that is an operator on . By the Fundamental Theorem of Algebra, we know that the minimal polynomial of can be written as a product of linear factors: , which tells us that there is a basis in which is upper triangular. We will denote the vectors in as .  Since is an inner product space, we can apply the Gram-Schmidt algorithm to to form a new orthogonal basis . The vectors in will be denoted by so that and so forth. We can rearrange these expressions so that . In other words, the change of coordinates matirx is upper triangular, which implies that is upper triangular.  We obtain an orthonormal basis by setting . Since this change of coordinates matrix is diagonal, we obtain the following result.   Schur decomposition   If is an operator on a finite dimensional complex inner product space, then there is an orthonormal basis in which the matrix representing is upper triangular.    This result is sometimes expressed in terms of matrices. We earlier considered orthogonal matrices, which are real matrices whose columns form an orthonormal basis. If the matrix is complex, such a matrix is called unitary .   A complex matrix whose columns form an orthonormal basis for is called unitary . Such a matrix satisfies .   We can now restate the Schur decomposition in terms of unitary matrices.   Schur decomposition, matrix version   If is a square complex matrix, then there is a unitary matrix and an upper triangular matrix such that .      Self-adjoint operators  When and are inner product spaces, a linear transformation has an adjoint as introduced in . When expressed in terms of orthonormal bases for and , the matrix associated to is the conjugate transpose of the matrix associated to . Or when the vector spaces are real, the matrices are simply the transpose of one another.  We will now consider operators on an inner product space that are self-adjoint .    We say that an operator on an inner product space is self-adjoint if .     The complex spectral theorem   If is a self-adjoint operator on a complex vector space , then there is an orthonormal basis for which is diagonal. Furthermore, the eigenvalues of are real.    By the Schur decomposition , we know that there is an orthonormal basis for which is upper triangular. However, since , we also know that , which says that is diagonal with real entries on the diagonal.    For real inner product spaces, self-adjoint operators are represented by symmetric matrices.    If is a self-adjoint operator on an inner product space and and are real numbers for which , then the operator is an isomorphism.    By the Fundamental Theorem of Linear Maps , we only need to show that . Therefore, we suppose that is a nonzero vector and consider . This shows that is also nonzero so the operator is an isomorphism.  The appearance of the inequality in the argument above results from the Cauchy-Scwarz inequality , which implies here that so that .    If and is an operator on , we know from the that the minimal polynomial of has the form where each . If and is a self-adjoint operator on , we can reach a similar conclusion.    If is a real inner product space and is a self-adjoint operator on , then the minimal polynomial of has the form where .    We know that the minimal polynomial has the form where for each . However, since , we know that . If , then is invertible by . If we multiply by its inverse, we obtain another polynomial of smaller degree for which .  Since the minimal polynomial is the polynomial having the smallest degree among all polynomials for which , we conclude that and therefore .     The Spectral Theorem   If is a self-adjoint operator on a real vector space , then there is an orthonormal basis such that the matrix associated to is diagonal.    By and , we know that there is a basis of for which the matrix associated to is upper triangular. As before, we apply the Gram-Schmidt algorithm to obtain an orthonormal basis and note that the change of coordinates matrix is upper triangular. Therefore, is also upper triangular.  However, if is this matrix, we know that since is self-adjoint. Therefore, is diagonal.    In terms of matrices, this has the more familiar form:   The spectral theorem, matrix edition   If is a real, symmetric matrix, then there is an orthogonal matrix and a diagonal matrix such that .     "
},
{
  "id": "thm-schur",
  "level": "2",
  "url": "sec-spectral.html#thm-schur",
  "type": "Theorem",
  "number": "2.2.1",
  "title": "Schur decomposition.",
  "body": " Schur decomposition   If is an operator on a finite dimensional complex inner product space, then there is an orthonormal basis in which the matrix representing is upper triangular.   "
},
{
  "id": "sec-spectral-3-7",
  "level": "2",
  "url": "sec-spectral.html#sec-spectral-3-7",
  "type": "Definition",
  "number": "2.2.2",
  "title": "",
  "body": " A complex matrix whose columns form an orthonormal basis for is called unitary . Such a matrix satisfies .  "
},
{
  "id": "sec-spectral-3-9",
  "level": "2",
  "url": "sec-spectral.html#sec-spectral-3-9",
  "type": "Theorem",
  "number": "2.2.3",
  "title": "Schur decomposition, matrix version.",
  "body": " Schur decomposition, matrix version   If is a square complex matrix, then there is a unitary matrix and an upper triangular matrix such that .   "
},
{
  "id": "sec-spectral-4-4",
  "level": "2",
  "url": "sec-spectral.html#sec-spectral-4-4",
  "type": "Definition",
  "number": "2.2.4",
  "title": "",
  "body": "  We say that an operator on an inner product space is self-adjoint if .   "
},
{
  "id": "sec-spectral-4-5",
  "level": "2",
  "url": "sec-spectral.html#sec-spectral-4-5",
  "type": "Theorem",
  "number": "2.2.5",
  "title": "The complex spectral theorem.",
  "body": " The complex spectral theorem   If is a self-adjoint operator on a complex vector space , then there is an orthonormal basis for which is diagonal. Furthermore, the eigenvalues of are real.    By the Schur decomposition , we know that there is an orthonormal basis for which is upper triangular. However, since , we also know that , which says that is diagonal with real entries on the diagonal.   "
},
{
  "id": "lemma-self-ad-quadratic",
  "level": "2",
  "url": "sec-spectral.html#lemma-self-ad-quadratic",
  "type": "Lemma",
  "number": "2.2.6",
  "title": "",
  "body": "  If is a self-adjoint operator on an inner product space and and are real numbers for which , then the operator is an isomorphism.    By the Fundamental Theorem of Linear Maps , we only need to show that . Therefore, we suppose that is a nonzero vector and consider . This shows that is also nonzero so the operator is an isomorphism.  The appearance of the inequality in the argument above results from the Cauchy-Scwarz inequality , which implies here that so that .   "
},
{
  "id": "prop-self-ad-min-poly",
  "level": "2",
  "url": "sec-spectral.html#prop-self-ad-min-poly",
  "type": "Proposition",
  "number": "2.2.7",
  "title": "",
  "body": "  If is a real inner product space and is a self-adjoint operator on , then the minimal polynomial of has the form where .    We know that the minimal polynomial has the form where for each . However, since , we know that . If , then is invertible by . If we multiply by its inverse, we obtain another polynomial of smaller degree for which .  Since the minimal polynomial is the polynomial having the smallest degree among all polynomials for which , we conclude that and therefore .   "
},
{
  "id": "thm-spectral-thm",
  "level": "2",
  "url": "sec-spectral.html#thm-spectral-thm",
  "type": "Theorem",
  "number": "2.2.8",
  "title": "The Spectral Theorem.",
  "body": " The Spectral Theorem   If is a self-adjoint operator on a real vector space , then there is an orthonormal basis such that the matrix associated to is diagonal.    By and , we know that there is a basis of for which the matrix associated to is upper triangular. As before, we apply the Gram-Schmidt algorithm to obtain an orthonormal basis and note that the change of coordinates matrix is upper triangular. Therefore, is also upper triangular.  However, if is this matrix, we know that since is self-adjoint. Therefore, is diagonal.   "
},
{
  "id": "sec-spectral-4-12",
  "level": "2",
  "url": "sec-spectral.html#sec-spectral-4-12",
  "type": "Theorem",
  "number": "2.2.9",
  "title": "The spectral theorem, matrix edition.",
  "body": " The spectral theorem, matrix edition   If is a real, symmetric matrix, then there is an orthogonal matrix and a diagonal matrix such that .   "
},
{
  "id": "sec-nilpotent",
  "level": "1",
  "url": "sec-nilpotent.html",
  "type": "Section",
  "number": "2.3",
  "title": "Nilpotent operators",
  "body": " Nilpotent operators   The previous section gave some conditions for a matrix to be diagonalizable. We will now explore what happens when a matrix is not diagonalizable.  If an operator on a vector space is diagonalizable, then the basis for which is diagonal consists of eigenvectors of . Remember that eigenvectors of an operator are found through the equation .  If we want to explore what happens when is not diagonalizable, we will need a more general notion of eigenvectors. To that end, we refer to vectors satisfying for some power as generalized eigenvectors. To get started, however, we will first consider a related class of operators.    Null spaces of powers  Suppose that is an operator on . If is a vector for which , then it also happens that . This means that , and we therefore have .  The next propositions say that this process stabilizes so that the inclusions eventually become equalities. First we show that when we reach an equality, then all the following inclusions are equalities as well.   If , then for any .   Suppose that for some and that is a vector in . It follows that , which means that is in . Because , it follows that is in , which says that .  We then see that .    The next result says that this process will always stablize by the time we reach the dimension of .    For any operator on a vector space of dimension , .    If , then is invertible as is every power of . Therefore for every power, including and .  Now suppose that has positive dimension so that and that the null spaces continue to grow . In this case, . This shows that the null spaces cannot grow beyond so we have .      Nilpotent operators  We will now focus on a particular type of operator known as nilpotent.   Nilpotent operator  An operator is nilpotent if some power .   Notice that the operator is nilpotent, but there are certainly nonzero nilpotent operators.   Consider the matrix and notice that . An operator whose associated matrix is with respect to some basis is nilpotent since .   Suppose is nilpotent and that is the smallest power for which . This means that if and hence is the minimal polynomial of . This says that so the smallest power of that is zero is not more than the dimension of .  We could view , which says that there is a basis for which the matrix associated to is upper triangular .  In fact, we will see that there is a basis so that the matrix associated to a nilpotent operator has an especially nice form.    A nilpotent block matrix is a square matrix having the form . That is, all the entries are zero except for the entries directly above the diagonal, which are 1.     The following matrix consists of three nilpotent blocks on the diagonal, a block, a block, and a block. .  Let's look a little more closely at how the linear transformation acts on basis vectors, which we'll denote as . We have . This shows that , but so we have null spaces . Within these null spaces, we have bases .  Notice that the block is formed by a vector that is in but not . Once we have identified , we obtain new basis vectors as and .   In fact, every nilpotent operator has a basis whose associated matrix consists of a set of nilpotent blocks on the diagonal, which we will state and prove in the next proposition.  First, notice that if is nilpotent, then its minimal polynomial is for some . In particular, this means that but . As we saw in , we have the inclusion of null spaces: where the inclusion of each null space into the other is a proper inclusion.  If is in , then , which means that is in . In other words, applying pushes a vector to the left in the inclusions of null spaces in .  We are now ready to prove our structure theorem for nilpotent operators.    If is a nilpotent operator on , then there is a basis for such that the matrix associated to has the form where each is a nilpotent block.    Our proof proceeds by induction on the dimension of the vector space , which we will denote by .  To verify the base case, suppose that . As we have seen, if is a vector in , then for some scalar . However, if is nilpotent, then and so . In any basis, the matrix representing is , a nilpotent block.  Now suppose that the result is true for any nilpotent operator on a vector space of dimension less than . Suppose also that the minimal polynomial of is . This means that but so . We will choose a vector in that is not in and define . Notice that so that is in . More generally, is in .  We will use to denote the subspace spanned by . Notice that a vector in may be written as and therefore . This shows that is a -invariant subspace of .  Using , suppose now that is a linear functional so that . We then define by . Once again, if is a vector in , then so that . This shows three things.   is surjective.   , the standard basis vector in , which means that is a linearly independent set and therefore a basis for . Moreover, in this basis, the matrix representing is a nilpotent block.   implies that , which means that .    Now consider . Since is surjective, we have by the Fundamental Theorem of Linear Maps . Moreover, so we have .  Finally, we claim that is a -invariant subspace. Notice that is in if and only if for all . If this is the case, then for all , which shows that is -invariant.  Because and is nilpotent, the inductive hypothesis applies to show that there is a basis for so that the matrix representing consists of nilpotent blocks. We can combine this basis with to finish the proof of the theorem.      "
},
{
  "id": "prop-nil-nul-incl",
  "level": "2",
  "url": "sec-nilpotent.html#prop-nil-nul-incl",
  "type": "Proposition",
  "number": "2.3.1",
  "title": "",
  "body": " If , then for any .   Suppose that for some and that is a vector in . It follows that , which means that is in . Because , it follows that is in , which says that .  We then see that .   "
},
{
  "id": "prop-null-dim-V",
  "level": "2",
  "url": "sec-nilpotent.html#prop-null-dim-V",
  "type": "Proposition",
  "number": "2.3.2",
  "title": "",
  "body": "  For any operator on a vector space of dimension , .    If , then is invertible as is every power of . Therefore for every power, including and .  Now suppose that has positive dimension so that and that the null spaces continue to grow . In this case, . This shows that the null spaces cannot grow beyond so we have .   "
},
{
  "id": "sec-nilpotent-4-3",
  "level": "2",
  "url": "sec-nilpotent.html#sec-nilpotent-4-3",
  "type": "Definition",
  "number": "2.3.3",
  "title": "Nilpotent operator.",
  "body": " Nilpotent operator  An operator is nilpotent if some power .  "
},
{
  "id": "sec-nilpotent-4-5",
  "level": "2",
  "url": "sec-nilpotent.html#sec-nilpotent-4-5",
  "type": "Example",
  "number": "2.3.4",
  "title": "",
  "body": " Consider the matrix and notice that . An operator whose associated matrix is with respect to some basis is nilpotent since .  "
},
{
  "id": "sec-nilpotent-4-9",
  "level": "2",
  "url": "sec-nilpotent.html#sec-nilpotent-4-9",
  "type": "Definition",
  "number": "2.3.5",
  "title": "",
  "body": "  A nilpotent block matrix is a square matrix having the form . That is, all the entries are zero except for the entries directly above the diagonal, which are 1.   "
},
{
  "id": "example-nilpotent",
  "level": "2",
  "url": "sec-nilpotent.html#example-nilpotent",
  "type": "Example",
  "number": "2.3.6",
  "title": "",
  "body": " The following matrix consists of three nilpotent blocks on the diagonal, a block, a block, and a block. .  Let's look a little more closely at how the linear transformation acts on basis vectors, which we'll denote as . We have . This shows that , but so we have null spaces . Within these null spaces, we have bases .  Notice that the block is formed by a vector that is in but not . Once we have identified , we obtain new basis vectors as and .  "
},
{
  "id": "sec-nilpotent-4-15",
  "level": "2",
  "url": "sec-nilpotent.html#sec-nilpotent-4-15",
  "type": "Proposition",
  "number": "2.3.7",
  "title": "",
  "body": "  If is a nilpotent operator on , then there is a basis for such that the matrix associated to has the form where each is a nilpotent block.    Our proof proceeds by induction on the dimension of the vector space , which we will denote by .  To verify the base case, suppose that . As we have seen, if is a vector in , then for some scalar . However, if is nilpotent, then and so . In any basis, the matrix representing is , a nilpotent block.  Now suppose that the result is true for any nilpotent operator on a vector space of dimension less than . Suppose also that the minimal polynomial of is . This means that but so . We will choose a vector in that is not in and define . Notice that so that is in . More generally, is in .  We will use to denote the subspace spanned by . Notice that a vector in may be written as and therefore . This shows that is a -invariant subspace of .  Using , suppose now that is a linear functional so that . We then define by . Once again, if is a vector in , then so that . This shows three things.   is surjective.   , the standard basis vector in , which means that is a linearly independent set and therefore a basis for . Moreover, in this basis, the matrix representing is a nilpotent block.   implies that , which means that .    Now consider . Since is surjective, we have by the Fundamental Theorem of Linear Maps . Moreover, so we have .  Finally, we claim that is a -invariant subspace. Notice that is in if and only if for all . If this is the case, then for all , which shows that is -invariant.  Because and is nilpotent, the inductive hypothesis applies to show that there is a basis for so that the matrix representing consists of nilpotent blocks. We can combine this basis with to finish the proof of the theorem.   "
},
{
  "id": "sec-jordan",
  "level": "1",
  "url": "sec-jordan.html",
  "type": "Section",
  "number": "2.4",
  "title": "Generalized eigenvectors",
  "body": " Generalized eigenvectors   Up to this point, eigenvalues and eigenvectors have helped us find some standard forms of operators. In particular, we have seen that if an operator on , an -dimensional vector space has linearly independent eigenvectors, then is diagonalizable. We also know that this condition holds if has distinct eigenvalues or if the operator is self-adjoint.  However, there are examples where this does not apply. For instance, the matrix has a single eigenvalue and the associated eigenspace is one-dimensional. In this case, the characteristic polynomial is so the eigenvalue is a root with multiplicity two.  This example shows that just looking at eigenvalues and eigenvectors will not be enough to always find a standard form. So instead, we do something that mathematicians love to do: generalize an idea that has already proven useful. In this case, the eigenvalue\/eigenvector condition is given by the equation . We will generalize this equation to for some and call the solutions generalized eigenvectors .    Generalized eigenvectors    If is an operator on , we say that a nonzero vector is a generalized eigenvector if for some . The set of such vectors is called the generalized eigenspace and is denoted .    Notice that eigenvectors are also generalized eigenvectors since an eigenvector satisfies , the generalized eigenvector condition with .  The next proposition connects generalized eigenspaces with the minimal polynomial.    If the minimal polynomial of has the form where , then .    Suppose that is a generalized eigenvector, which means that for some . If , then , which means that , the minimal polynomial of , divides . Therefore, for some .  The minimal polynomiall of has exactly factors of . Since divides , can have no more than factors of . Therefore, , which says that is in .    We know that a vector cannot be an eigenvector associated to two different eigenvalues. This is also true for generalized eigenvectors.    If and are distinct eigenvalues of , then .    Suppose that is a nonzero vector in . Then for some , which says that is a root of .  At the same time, if is in , then for some . Since , we must have .       Complex Vector Spaces  Because of the Fundamental Theorem of Algebra, operators on complex vector spaces have special properties. In particular, the minimal polynomial of an operator on a complex vector space has the form . In this case, we claim that is a direct sum of generalized eigenspaces.    If is an operator on a complex vector space with eigenvalues , then .    We will use induction on the dimension of . To establish the base case, we assume that . In this case, so or . Then .  For the inductive step, we will assume the result is true for all vector spaces of dimension less than . We will choose an eigenvalue and write the minimal polynomial as where .  Notice that . To see this, suppose that is in this intersection. Then for some vector . Moreover, . This implies that divides so that the only factors of are . Since also divides the minimal polynomial , we also know that divides . Therefore, .  Because of , we also know that , which says that . If we define , then we also have .  Since we have written the minimal polynomial , we can see that the minimal polynomial of is . For instance, if is in , then for some vector . Then . This shows that the minimal polynomial of divides . However, if the minimal polynomial of has a smaller degree than , this would contradict the fact that the minimal polynomial of has the smallest possible degree.  By the inductive hypothesis, may be written as a direct sum of its generalized eigenspaces. All that remains is to show that, if is an eigenvalue distinct from , the generalized eigenspace of associated to is the same as the generalized eigenspace of associated to . To this end, suppose that satisfies for some . Because , we can write where and . We have . Because these subspaces are -invariant, we have . This means that by so that . Therefore, and .       Jordan form  We are now ready to proof the main structure theorem, again assuming that is a complex vector space. By a Jordan block, we mean a matrix whose diagonal entries are all , whose entries directly above the diagonal are 1, and whose other entries are all zero. That is, .   Jordan canonical form   If is an operator on a complex vector space , then there is a basis for such that the matrix associated to consists only of Jordan blocks on the diagonal. That is, .    We know that . Moreover, on , the operator is nilpotent, which means there is a basis for such that the matrix associated to conists of nilpotent blocks. The matrix associated to therefore consists of Jordan blocks. Because each generalized eigenspace is invariant under , the theorem holds.    Notice that the characteristic polynomial of , which can easily be found using this matrix, has the form where the multiplicity of each eigenvalue equals the dimension . In our previous course, we called the algebraic multiplicity of the eigenvalue . Because the eigenspace , we have therefore shown that the multiplicity of the eigenvalue is at least as large as the dimension of the eigenspace: .    If is an eigenvalue of the operator whose multiplicity, which is the number of times appears as a factor of the characteristic polynomial, is , then .     "
},
{
  "id": "sec-jordan-3-2",
  "level": "2",
  "url": "sec-jordan.html#sec-jordan-3-2",
  "type": "Definition",
  "number": "2.4.1",
  "title": "",
  "body": "  If is an operator on , we say that a nonzero vector is a generalized eigenvector if for some . The set of such vectors is called the generalized eigenspace and is denoted .   "
},
{
  "id": "sec-jordan-3-5",
  "level": "2",
  "url": "sec-jordan.html#sec-jordan-3-5",
  "type": "Proposition",
  "number": "2.4.2",
  "title": "",
  "body": "  If the minimal polynomial of has the form where , then .    Suppose that is a generalized eigenvector, which means that for some . If , then , which means that , the minimal polynomial of , divides . Therefore, for some .  The minimal polynomiall of has exactly factors of . Since divides , can have no more than factors of . Therefore, , which says that is in .   "
},
{
  "id": "prop-gen-eig-disjoint",
  "level": "2",
  "url": "sec-jordan.html#prop-gen-eig-disjoint",
  "type": "Proposition",
  "number": "2.4.3",
  "title": "",
  "body": "  If and are distinct eigenvalues of , then .    Suppose that is a nonzero vector in . Then for some , which says that is a root of .  At the same time, if is in , then for some . Since , we must have .   "
},
{
  "id": "sec-jordan-4-3",
  "level": "2",
  "url": "sec-jordan.html#sec-jordan-4-3",
  "type": "Proposition",
  "number": "2.4.4",
  "title": "",
  "body": "  If is an operator on a complex vector space with eigenvalues , then .    We will use induction on the dimension of . To establish the base case, we assume that . In this case, so or . Then .  For the inductive step, we will assume the result is true for all vector spaces of dimension less than . We will choose an eigenvalue and write the minimal polynomial as where .  Notice that . To see this, suppose that is in this intersection. Then for some vector . Moreover, . This implies that divides so that the only factors of are . Since also divides the minimal polynomial , we also know that divides . Therefore, .  Because of , we also know that , which says that . If we define , then we also have .  Since we have written the minimal polynomial , we can see that the minimal polynomial of is . For instance, if is in , then for some vector . Then . This shows that the minimal polynomial of divides . However, if the minimal polynomial of has a smaller degree than , this would contradict the fact that the minimal polynomial of has the smallest possible degree.  By the inductive hypothesis, may be written as a direct sum of its generalized eigenspaces. All that remains is to show that, if is an eigenvalue distinct from , the generalized eigenspace of associated to is the same as the generalized eigenspace of associated to . To this end, suppose that satisfies for some . Because , we can write where and . We have . Because these subspaces are -invariant, we have . This means that by so that . Therefore, and .   "
},
{
  "id": "sec-jordan-5-3",
  "level": "2",
  "url": "sec-jordan.html#sec-jordan-5-3",
  "type": "Theorem",
  "number": "2.4.5",
  "title": "Jordan canonical form.",
  "body": " Jordan canonical form   If is an operator on a complex vector space , then there is a basis for such that the matrix associated to consists only of Jordan blocks on the diagonal. That is, .    We know that . Moreover, on , the operator is nilpotent, which means there is a basis for such that the matrix associated to conists of nilpotent blocks. The matrix associated to therefore consists of Jordan blocks. Because each generalized eigenspace is invariant under , the theorem holds.   "
},
{
  "id": "sec-jordan-5-5",
  "level": "2",
  "url": "sec-jordan.html#sec-jordan-5-5",
  "type": "Theorem",
  "number": "2.4.6",
  "title": "",
  "body": "  If is an eigenvalue of the operator whose multiplicity, which is the number of times appears as a factor of the characteristic polynomial, is , then .   "
},
{
  "id": "sec-power",
  "level": "1",
  "url": "sec-power.html",
  "type": "Section",
  "number": "3.1",
  "title": "The power method",
  "body": " The power method   We will begin by considering the problem of finding the eigenvalues of an matrix where is extremely large and the only operation we can perform is matrix-vector multiplication .  The power method , which we introduce in this section, is a fairly simple way for us to get started. While this method is not particularly effective in practical problems, it will inform a great deal of our later thinking.    The power method  For convenience, we will suppose that has a complete set of eigenvectors with associated eigenvalues and that the eigenvalues are ordered so that . Our initial version of the power method will help us find , the eigenvalue having the largest magnitude, which is often called the dominant eigenvalue.  Suppose we start with a randomly chosen vector so that . Since is randomly chosen, it is safe to assume that . If not, we had really bad luck in choosing . However, computers cannot perform exact arithmetic so even if , some error will creep into the subsequent calculations making .  We can multiply by so that . Since has the largest magnitude, we see that the contribution to from is the greatest. While this is the essential idea in the power method, as we will see, this also explains why finding is useful: the eigenvalues with the greatest magnitude contribute the most to .  If we repeatedly multiply by , we see that . We expect that for and, as a result, that as grows. Consequently, when is large, , which shows that the direction of will approximate more and more closely the direction of .  Of course, if or , then the length of will grow very large or shrink away to zero. To mitigate this effect, we will normalize the product after every step. Remembering that means to replace the value of by the current value of , the first draft of our algorithm looks like this,   Choose randomly    Repeat a sufficient number of times:       Assuming that , the resulting vector is eventually a good approximation of the eigenvector .  How can we find an approximation for the eigenvalue ? If , then , and so that . This ratio of the inner products is known as the Rayleigh quotient .    Given a square matrix and a vector , the Rayleigh quotient is defined to be .      If is an eigenvector of with associated eigenvalue , then .    This is because .    This leads to an updated version of the power method:   Choose randomly    Repeat a sufficient number of times:        Now each iteration of the algorithm produces an approximation of and .  The following Sage cell implements the power method and applying it to the matrix and initial vector 20 times.   For this matrix, we have seen that the dominant eigenvalue and a basis vector for is . Notice how our demonstration shows the results converging to these quantities.  We will not be too careful about analyzing how rapidly the eigenvalue estimates converge to the exact eigenvalue, but we can make some straightforward observations. Remember that , which shows that the direction of approaches the direction of the eigenvector and that the second largest term is determined by the ratio . If is much less than , then will approach 0 quickly, which means we can expect our eigenvalue estimates to converge quickly. If is close to , then will approach 0 slowly so that we expect our eigenvalue estimates to converge slowly as well.    The inverse power method  The power method will help us find the dominant eigenvalue of a matrix . Can we find any more?  Remember that, assuming is an eigenvector of an invertible matrix with associated nonzero eigenvalue , then is also an eigenvector of with associated eigenvalue . Therefore, applying the power method to will help us find the eigenvalue of having the smallest magnitude.  Here is our algorithm, called the inverse power method, looks in this case:   Choose randomly    Repeat a sufficient number of times:        As you can see, the only change is that we multiply by in the iteration. The following Sage cell demonstrates.   In this case, we see the results converging to the eigenvalue and associated eigenvector .  Remember that there is a potentially prohibitive cost to finding the inverse . Therefore, it is preferred to replace the step with Solve for . In this formulation, an factorization of could be reused when repeatedly solving the equation.  The eigenvalue with the smallest absolute value is so the convergence of the eigenvalue estimates is determined by the ratio . When the eigenvalues are close in magnitude, then we expect slow convergence.    The shifted inverse power method  With another modification, we can use these ideas to find any eigenvalue of . Remember that if is an eigenvector of having eigenvalue , then is also an eigenvector of with associated eigenvalue . Therefore, applying the inverse power method to will find the eigenvalue of closest to . Once again, the algorithm only modifies a single line.   Choose randomly    Repeat a sufficient number of times:           This use of the shifted inverse power method will find the eigenvalue of closest to , which is 5.97351259038981 . With some more experimenting, you should be able to find all five eigenvalues of .  The rate of convergence is controlled by the ratio where is the eigenvalue closest to and is the next closest eigenvalue. Therefore, the closer we choose to , we faster we expect the eigenvalue estimates to converge.  Notice that, after 20 steps, our estimate for the eigenvalue, found in the previous Sage cell, is only accurate to within 0.03%. Thus we see a few drawbacks to the power method:  It oftentimes converges slowly.  It finds only one eigenvalue at a time.  We need to find or solve equations of the form in each step. \/ Automating the process of finding all the eigenvalues could be difficult since we need to determine appropriate values of to use in the shifted version.    While we will explore ways to address these shortcomings, the power method is important as a demonstration of one idea that we will continue to use: repeatedly multiplying by gives us information about the eigenvalues.   "
},
{
  "id": "sec-power-3-8",
  "level": "2",
  "url": "sec-power.html#sec-power-3-8",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "  Given a square matrix and a vector , the Rayleigh quotient is defined to be .   "
},
{
  "id": "sec-power-3-9",
  "level": "2",
  "url": "sec-power.html#sec-power-3-9",
  "type": "Proposition",
  "number": "3.1.2",
  "title": "",
  "body": "  If is an eigenvector of with associated eigenvalue , then .    This is because .   "
},
{
  "id": "sec-qr",
  "level": "1",
  "url": "sec-qr.html",
  "type": "Section",
  "number": "3.2",
  "title": "QR methods",
  "body": " QR methods   In this section, our goal is to improve the power method so that we compute more eigenvalues of . For convenience, we will focus on real, symmetric matrices for which the Spectral Theorem tells us that there is an othonormal basis for consisting of eigenvectors of the matrix . While many of the ideas we will discuss apply more generally, this assumption will simplify some of our thinking.  We began this chapter emphasizing the fact that we want to study very large, possibly sparse matrices. We will return to that in later sections, but we will set aside this focus for the time being.    Using orthogonality  In the last section , we explored the power method, how it leads to eigenvalue estimates, and some of its drawbacks. In particular, we saw that the power method, and its variants, focus on a single eigenvalue by looking at powers of a single vector. Perhaps we could do better by applying the power method to a collection of vectors ; that is, we will start with an matrix , whose columns are linearly independent.  If we repeatedly multiply by , we obtain the matrix . Assuming is nonsingular, will be an -dimensional subspace of .  For the moment, we focus on the first two vectors and and write in terms of eigenvectors . Then . The span of these two vectors will be a -dimensional subspace and the most significant terms involve and . This means that .  Also, the ordinary power method tells us to expect that approximately points in the direction . Due to our assumption that is symmetric, we know that is orthogonal to . Therefore, to find the approximate direction of , we can look for a vector in that is orthogonal to . Such a vector can be found using Gram-Schmidt orthogonalization.    We will investigate using the matrix , whose eigenvalues we already know to be and . We will choose and so that and hence . Our notation is that so that approximately points in the direction of , We find a vector orthogonal to using Gram-Schmidt so that we obtain . We expect that will be a good approximation to and will be a good approximation to . The following Sage cell implements these computations using .   Clearly, this idea fails here since we find that , whose direction should approximate , is zero. To see why, notice that the vectors and appear to be the same, at least as computed by Sage.  The problem is that the components of these vectors are so large (approximately ) that the floating point computations cannot detect the difference in these vectors. For this reason, we need to modify this idea.      The QR Method  Instead of computing for a very large and then finding an orthogonal basis, we will multiply once, finding , determine an orthogonal basis for the column space of , and then repeat.  Remember that the Gram-Schmidt algorithm is described by a factorization. That is, if we write , then is a matrix whose columns are orthonormal and is upper triangular. In particular, if , then , which has more information about the first eigenvector . The second column is orthgonal to and should be expected to have more information about the second eigenvector . Our hope is that for some appropriate set of eigenvectors . That is, after one step, the columns of more closely align with a set of eigenvectors than do the columns of our original matrix . We then replace by and repeat.  This leads to the following algorithm:   Choose randomly.    Repeat a sufficient number of times:   Find  Find a factorization .  Replace .    As begins to approach an orthogonal basis of eigenvectors, then should start to approach a diagonal matrix whose entries are the eigenvalues of .  The following Sage cell demonstrates with the previous matrix .   This looks promising. We see that approaches a diagonal matrix whose entries are the eigenvalues of and begins to approach an orthonormal set of eigenvectors.  If we are only interested in finding eigenvalues, we can streamline this method further. If we take , then the factorization produces an orthogonal matrix so that we can form , which is similar to . Because similar matrices share the same set of eigenvalues, we can continue working with rather than . As we iterate, the columns of still approach an orthogonal set of eigenvectors and hence should approach a diagonal matrix containing the eigenvalues.  But something remarkable happens. If , then . That is, and , which means we find the new matrix by simply reversing the order of the product. Therefore, our algorithm to find the eigenvalues of takes a simple form, which is known as the algorithm :   Repeat a sufficient number of times:   Find a factorization .  Replace .    It's hard to imagine a simpler algorithm. Let's see how it does.   Notice how the matrix approaches a diagonal matrix with the eigenvalues on the diagonal!    Let's try with a larger symmetric matrix, . We will iterate several times, and then examine the hopefully almost diagonal matrix . Notice that the actual eigenvalues of appear at the top of the cell's output.   After 50 iterations, the algorithm has made good progress toward finding the eigenvalues .     The shifted QR algorithm  The algorithm is based on the power method, which we began by attempting to find the dominant eigenvalue . With a little bit of algebra, however, we will see that there is even more going on.  Let's first consider the matrix , which is an example of what is called a permutation matrix. For instance, if , then showing that multiplying by on the right reverses the columns of . In particular, this shows that so that is its own inverse. Similarly, multiplying a matrix on the left by reverses the rows of .  This means that if , then . Once again, the columns of are the same as the columns of , just reversed, which means that is also an orthogonal matrix.  Since we are assuming that is symmetric, we know that . Taking the inverses of both sides says that so that is also symmetric. Now if we have a factorization of , we have and hence where . Since , it then follows that .  Remember that is upper triangular, which means that is lower triangular. However, is obtained from by reversing the columns and reversing the rows, which means that is upper triangular. Since is orthogonal, this shows that is a factorization of of .  Now that we've been through this algebraic digression, we see the following implication. When we implement the algorithm on , the last column of is the first column of , which we obtain by implementing the algorithm on . This means that while the algorithm is applying the power method to the first vector, it is applying the inverse power method to the last vector at the same time.  In other words, we developed the algorithm based on the power method, which finds the dominant eigenvalue associated to the first column of . It turns out, however, that the algorithm is also simultaenously performing the inverse power method on the last column of . This is an unexpected bonus that we can exploit to speed up the algorithm!  Suppose that the columns of are denoted by . Also suppose that is the last standard basis vector, that is, the vector whose components are all zero except for the last component, which is . We have . Therefore, the Rayleigh quotient , the entry in the lower-right corner of the matrix that results from one step of the iteration. This shows that, if is an approximate eigenvector, then the new will approximately be an eigenvalue.  This suggests a change in tactics. Since the algorithm is performing the inverse power method on the last column of the matrix, we can shift by , an approximation to the eigenvalue associated to the approximate eigenvector , so that we are performing the shifted inverse power method. This should converge quickly if we continually update our shift by , our approximate eigenvalue. Here is our new algorithm:   Repeat a sufficient number of times:   Let  Find a factorization .  Replace .    This is known as the shifted algorithm .    Let's reconsider the matrix, , that has the eigenvalue 4.893138821026808 . The following Sage cell implements the shifted algorithm.   Notice that with only seven iterations, we have found the eigenvalue accurate to within 15 digits, which is about as good as we're going to get with a computer. Moreover, the final matrix essentially has only one zero in the last row and last column. In other words, it approximately looks like the block matrix: . This observation will be important in our final improvement.    We would like to find all of the eigenvalues of so there is yet one more improvement we can make. First, we will see in the next section how some preliminary work produces a matrix that is similar to and that is tridiagonal, meaning that the only nonzero elements are on the diagonal, or just above or below the diagonal. For instance, is a symmetric, tridiagonal matrix with which we can begin the new algorithm.  We will perform enough steps of the shifted algorithm until we reach the point that the final matrix . Practically speaking, we iterate until the element in the last row and next to last column is sufficiently small. We then make note of the eigenvalue and proceed to apply the shifted algorithm to .   Notice that we have computed all four eigenvalues of to almost within the accuracy of the computer with a total of only 10 iterations. This is truly a remarkable algorithm!  The shifted algorithm is the state of the art for finding eigenvalues of symmetric matrices. While there are newer algorithms that rival it, shifted is simple, numerically stable, and in wide use today. The Association of Computing Machinery named it one of the top ten algorithms of the century.   "
},
{
  "id": "sec-qr-3-6",
  "level": "2",
  "url": "sec-qr.html#sec-qr-3-6",
  "type": "Example",
  "number": "3.2.1",
  "title": "",
  "body": "  We will investigate using the matrix , whose eigenvalues we already know to be and . We will choose and so that and hence . Our notation is that so that approximately points in the direction of , We find a vector orthogonal to using Gram-Schmidt so that we obtain . We expect that will be a good approximation to and will be a good approximation to . The following Sage cell implements these computations using .   Clearly, this idea fails here since we find that , whose direction should approximate , is zero. To see why, notice that the vectors and appear to be the same, at least as computed by Sage.  The problem is that the components of these vectors are so large (approximately ) that the floating point computations cannot detect the difference in these vectors. For this reason, we need to modify this idea.   "
},
{
  "id": "sec-qr-4-12",
  "level": "2",
  "url": "sec-qr.html#sec-qr-4-12",
  "type": "Example",
  "number": "3.2.2",
  "title": "",
  "body": "  Let's try with a larger symmetric matrix, . We will iterate several times, and then examine the hopefully almost diagonal matrix . Notice that the actual eigenvalues of appear at the top of the cell's output.   After 50 iterations, the algorithm has made good progress toward finding the eigenvalues .  "
},
{
  "id": "sec-qr-5-11",
  "level": "2",
  "url": "sec-qr.html#sec-qr-5-11",
  "type": "Example",
  "number": "3.2.3",
  "title": "",
  "body": "  Let's reconsider the matrix, , that has the eigenvalue 4.893138821026808 . The following Sage cell implements the shifted algorithm.   Notice that with only seven iterations, we have found the eigenvalue accurate to within 15 digits, which is about as good as we're going to get with a computer. Moreover, the final matrix essentially has only one zero in the last row and last column. In other words, it approximately looks like the block matrix: . This observation will be important in our final improvement.   "
},
{
  "id": "sec-arnoldi",
  "level": "1",
  "url": "sec-arnoldi.html",
  "type": "Section",
  "number": "3.3",
  "title": "Arnoldi iteration",
  "body": " Arnoldi iteration   The algorithm that we developed in the previous section is a general purpose algorithm for finding all the eigenvalues of a symmetric matrix. We now return to the problem we stated at the beginning of this chapter. We assume that   is an matrix, where is possibly huge, and is not necessarily symmetric but is possibly sparse.    We do not want to store the entire matrix in a computer, but instead we assume that we can efficiently compute for any vector .     We will develop techniques for approximating the largest eigenvalues of and for approximating the solution of . Two key ideas will be the use of Krylov subspaces, which were introduced in but which we will revisit soon in more detail, and Arnoldi iteration, which will produce an orthonormal basis for a Krylov subspace.    Arnoldi iteration  Since we are interested in computing the eigenvalues of a matrix, we may remember that tells us that any complex matrix is similar to an upper triangular matrix. The diagonal entries in the upper triangular matrix would then give us the eigenvalues. This is also true for real matrices as long as we allow complex arithmetic.  Unfortunately, there is not a computationally feasible algorithm to produce an upper triangular matrix similar to given our assumptions. However, we may relax the condition somewhat and consider Hessenberg matrices, which are matrices having the following, almost-upper triangular form: . That is, a Hessenberg matrix is upper triangular except for nonzero entries that could live just below the diagonal. If we are given a square matrix , it turns out there are several computationally feasible ways to find a Hessenberg matrix similar to . One way that may be familiar involves Householder reflections.  However, we assume we are in the situation where we do not have access to the matrix and that we can multiply for any vector . In language from the earlier part of our course, we know the operator defined by , but not itself. A technique known as Arnoldi iteration allows us to find a unitary matrix and a Hessenberg matrix such that . If we work with real matrices, we find an orthogonal matrix with .  We have and . We begin by rewriting as so that . This leads to the expressions .    Rather than developing a general explanation for finding and , we will demonstrate with an example. Suppose that . We choose any nonzero vector and define . We will choose so that .  Our first expression is . Remember that the vectors will be the columns of an orthogonal matrix, which means that they form an orthonormal set. Therefore, . That is, we find , so we see that is a Rayleigh quotient, which is encouraging.  In our example, we have so that .  Rearranging the expression for , we have . Because has unit length, we have so that and then or .  We now repeat the same process using the second expression . In particular, so that, once again, is a Rayleigh quotient.  In our example, and hence and .  Rearranging the expression for shows that . Therefore, and .  Notice that , , and form a basis for so we have all three columns for the matrix . Our final expression is , which gives . This leaves us with from which we can check that .  Notice that our original matrix is symmetric. Since , we have showing that is symmetric too. Since is also Hessenberg, this explains why is tridiagonal, which is seen by the presence of the in the first row, third column of .      Krylov subspaces  We will now explore how Arnoldi iteration can approximate the largest eigenvalues of an matrix when is very large. To begin, we recall that the power method, our first technique for approximating eigenvalues, begins with a randomly chosen vector and repeatedly multiplies by to compute .  One feature of the power method is that it is forgetful. That is, we compute lots of vectors , but at every step we only use the last one. Perhaps we could do better if we remembered all the vectors. This is the motivation for considering a Krylov subspace : and its associated Krylov matrix  .  You may remember that we introduced Krylov subspaces when we constructed the minimal polynomial of a vector . Notice that we have the inclusion of subspaces and that these begin as proper inclusions until the vectors become linearly dependent. We said that is the grade of and noted that a non-trivial linear relationship between these vectors led to the minimal polynomial .  Remember that divides the minimal polynomial of . If , then is in , a proper subspace of . The chances of choosing a vector in a given proper subspace is practically zero so we generally do not expect this to happen. In other words, we expect the chain of proper inclusions to continue for a long time so we assume that .    Suppose we apply Arnoldi iteration to the matrix to produce an orthogonal matrix . Then where is upper triangular and is an orthonormal basis for the Krylov subspace .    Recall that , which implies that .  Notice that so that . Now suppose that . It then follows that where the equality of spans follows from . This shows, by induction, that for all .  Since is the column of and is a linear combination of the first columns of , it follows that where is upper triangular.    This proposition shows that Arnoldi iteration creates a factorization of without explicitly constructing . This is good fortune indeed!  This analysis also provides some insight into a possible issue when running Arnoldi iteration. Remembering that , the algorithm could break down if . When this is the case, and hence is not defined.  This can only happen, however, if is also in , which we have seen means that , the grade of , and that , the minimal polynomial of , is a proper factor of the minimal polynomial of . Since there are finitely many proper factors of , the chance that we randomly choose in the null space of one of those factors is exceedingly rare.    Eigenvalues and Arnoldi iteration  We introduced Arnoldi iteration as a way of finding a Hessenberg matrix similar to . Remember, however, that we would like to work with very large matrices for which it would not be practical to run the algorithm to completion. Instead, we remember that the power method tells us that the Krylov subspaces contain information about the largest eigenvalues of . Also, Arnoldi iteration is a process that, after each step, produces an orthonormal basis for the Krylov subspace where is usually much smaller than , the size of the matrix.  We will slightly reformulate the algebraic framework for Arnoldi iteration to focus on intermediate steps without expecting that it runs to completion. Once again, we will have , which is an matrix with . Multiplying the columns of by gives the relations that we saw earlier: . Notice the term in the expression for . Putting all the coefficients into a matrix results in the matrix . Notice that the shape of is so it is not square. We do, however, have .  Here are some straightforward observations.   Since the columns of are orthonormal, we have .    so . That is, is an matrix with a column of zeros appended to the side of the identity matrix.    If we define , then is a square matrix obtained from by removing its last row.    Because , it also follows that . While this may appear to say that is similar to , remember than is not square so this is not a similarity relationship. It does suggest, however, that is somewhat similar to so that they may share some common features.     Our goal now is to work with an matrix , which is possibly very large, and approximate its largest eigenvalues. The power method tells us that the Krylov subspace can be expected to have information about the largest eigenvalues of . For this reason, we will use the Krylov subspace to create an approximation of .  The Krylov subspace is an -dimensional subspace of so we can consider the orthogonal projection . This leads us to form the approximating operator by . This is, multiplies a vector in by and then projects it back into .  Notice that defines an operator on where is huge, while defines an operator on an -dimensional space where is possibly much smaller than . Therefore, the operator is an approximation to on a much lower dimensional subspace that has important information about the largest eigenvalues of .    If is the orthonormal basis for , then the matrix representing is .    Since is an orthonormal basis for , the orthogonal projection is given by , which says that . Now the change of basis relationships tell us that and . Putting this together, we have .    This remarkable turn of events shows us that Arnoldi iteration provides the perfect tool for approximating the largest eigenvalues of . The operator approximates on a subspace with information about the largest eigenvalues and the matrix , which is formed by Arnoldi iteration, represents the operator . This leads us to suspect that   The eigenvalues of approximate the largest eigenvalues of .   The eigenvalues of are called Ritz values . Since is an matrix and is much smaller than , we can use a conventional technique, such as the QR algorithm to find the Ritz values.    A working example  We will demonstrate these ideas computationally. We will first construct a matrix and plot its eigenvalues. Of course, this is not a particularly large matrix, certainly not of the size we have imagined in this discussion, but it is big enough to demonstrate the central ideas.  Evaluate the following cell and you will see a plot of eigenvalues in the complex plane. For the most part, the eigenvalues are spread uniformly throughout a disk though there are a couple of eigenvalues of relatively large magnitude along the positive real axis.   Evaluating the next cell performs 6 steps of Arnoldi iteration to produce a matrix , which is displayed to demonstrate its Hessenberg form. (This cell and the next assume that the previous cell has been recently evaluated.)   Next we plot the eigenvalues of , which we call the Ritz values, and compare them to the eigenvalues of . We begin with a small value of , but you should experiment by increasing the value of and noting how the Ritz values approximate the largest eigenvalues. Note what happens when , for instance.   To restate the main idea, we assume that is so large that it is not possible to directly compute its eigenvalues. Instead, we approximate by where is relatively small so that its eigenvalues can be computed through traditional means. We see that the eigenvalues of approximate the large eigenvalues of and that the accuracy of the approximations improve as grows.    GMRES  Besides finding the eigenvalues of a matrix, the other main task in numerical linear algebra is solving a linear system . Once again, we imagine that is very large so that Gaussian elimination, or some variant, is not computationally feasible. We will see how our understanding of Krylov subspaces and Arnoldi iteration provides an effective tool called GMRES or generalized minimal residuals.  To approximate the solution to , we construct the Krylov matrix and the Krylov subspace . Once again, contains information about the largest eigenvalues of , which are usually the most important. The idea of GMRES is to approximate , the solution to the equation , by , the vector in that minimizes . This is now a least squares problem.  Arnoldi iteration begins with and constructs and so that . Remember that is an orthonormal basis for so that we can write . It is worth noting the dimensions of these quantities: is an matrix, which means that is in , as expected, and is in . In other words, is a low-dimensional vector.  We make two observations:  We recast the first step in the iteration, , so that where is the first -dimensional standard basis vector.  Since the columns of are orthonormal, we have the familiar fact: . That is, multiplying by does not change the length of a vector.    We put these facts to use by noting that we want to find that minimizes .  To summarize, our task is to find that minimizes . Recall that is an matrix and is in . This is a tractable least squares problem since is assumed to be small. In particular, we can find a factorization of so that and then . (Of course, the in this expression is not related to , which is obtained from Arnoldi iteration.) Once we have , we find , our approximation to , the solution to the equation .  The following cell will form a random matrix , a random vector , and . This means that is the solution that we want to approximate.   Now we perform GMRES for . For each , we have an approximate solution so we observe the error .   In the final step, we are approximating the solution to a system with the solution to a least squares problem. As you can see, the approximations are excellent.  These Sage cells implement a simplistic version of GMRES in that it begins Arnoldi iteration from the beginning for each value of . A better implementation would reuse the results of the previous iteration so that only one step of Arnoldi would be needed.  One possible problem with Arnoldi iteration, and therefore with GMRES, is that we need to store all of the previous vectors and these are -dimensional vectors. This means that we may run out of memory before we have found a suitably accurate approximation. For this reason, there are several strategies for restarting Arnoldi once we reach that point.   "
},
{
  "id": "example-arnoldi",
  "level": "2",
  "url": "sec-arnoldi.html#example-arnoldi",
  "type": "Example",
  "number": "3.3.1",
  "title": "",
  "body": "  Rather than developing a general explanation for finding and , we will demonstrate with an example. Suppose that . We choose any nonzero vector and define . We will choose so that .  Our first expression is . Remember that the vectors will be the columns of an orthogonal matrix, which means that they form an orthonormal set. Therefore, . That is, we find , so we see that is a Rayleigh quotient, which is encouraging.  In our example, we have so that .  Rearranging the expression for , we have . Because has unit length, we have so that and then or .  We now repeat the same process using the second expression . In particular, so that, once again, is a Rayleigh quotient.  In our example, and hence and .  Rearranging the expression for shows that . Therefore, and .  Notice that , , and form a basis for so we have all three columns for the matrix . Our final expression is , which gives . This leaves us with from which we can check that .  Notice that our original matrix is symmetric. Since , we have showing that is symmetric too. Since is also Hessenberg, this explains why is tridiagonal, which is seen by the presence of the in the first row, third column of .   "
},
{
  "id": "sec-arnoldi-4-3",
  "level": "2",
  "url": "sec-arnoldi.html#sec-arnoldi-4-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Krylov matrix "
},
{
  "id": "sec-arnoldi-4-4",
  "level": "2",
  "url": "sec-arnoldi.html#sec-arnoldi-4-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "grade "
},
{
  "id": "sec-arnoldi-4-6",
  "level": "2",
  "url": "sec-arnoldi.html#sec-arnoldi-4-6",
  "type": "Proposition",
  "number": "3.3.2",
  "title": "",
  "body": "  Suppose we apply Arnoldi iteration to the matrix to produce an orthogonal matrix . Then where is upper triangular and is an orthonormal basis for the Krylov subspace .    Recall that , which implies that .  Notice that so that . Now suppose that . It then follows that where the equality of spans follows from . This shows, by induction, that for all .  Since is the column of and is a linear combination of the first columns of , it follows that where is upper triangular.   "
},
{
  "id": "sec-arnoldi-5-8",
  "level": "2",
  "url": "sec-arnoldi.html#sec-arnoldi-5-8",
  "type": "Proposition",
  "number": "3.3.3",
  "title": "",
  "body": "  If is the orthonormal basis for , then the matrix representing is .    Since is an orthonormal basis for , the orthogonal projection is given by , which says that . Now the change of basis relationships tell us that and . Putting this together, we have .   "
},
{
  "id": "sec-arnoldi-5-11",
  "level": "2",
  "url": "sec-arnoldi.html#sec-arnoldi-5-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Ritz values "
},
{
  "id": "sec-lanczos",
  "level": "1",
  "url": "sec-lanczos.html",
  "type": "Section",
  "number": "3.4",
  "title": "Lanczos iteration",
  "body": " Lanczos iteration   The last section showed us that Arnoldi iteration can be an effective technique for finding the large eigenvalues of a matrix and for approximating solutions to linear systems . We began our study of Arnoldi iteration by seeking the Hessenberg form of . That is, we wanted to find an orthogonal matrix and a Hessenberg matrix such that . Here we specialize to the case when is symmetric.    Lanczos iteration  When is symmetric, we see that is also symmetric. This implies that it is tridiagonal so we denote it by rather than . . In this case, Arnoldi iteration simplifies because many terms in the iteration are zero. This leads to a slight modification of the algorithm that we call Lanczos iteration.   We have the relations . Notice that we have .  As before, we typically think of as an matrix where is very large and that we perform steps of Lanczos iteration to obtain and such that .  The following cell defines a function that implements Lanczos iteration and returns and . It also defines a symmetric matrix . Evaluate this cell, and we will explore the results in the following cell.   Remember that the eigenvalues of the square matrix approximate the largest eigenvalues of . The next cell defines a value for and performs steps of Lanczos iteration on the matrix defined in the previous cell. It will then print the largest eigenvalues of and side by side for comparison. Explore what happens with , , , and and take note of what you observe.   As grows, we eventually encounter a problem. Because is symmetric, we know that the matrix is tridiagonal, which dramatically reduces the amount of computation we need to perform. However, we do not explicitly enforce orthogonality between the last vector created and the earlier ones. Since we cannot perform exact arithmetic with a computer, round off error eventually means that is not perfectly orthogonal to the earlier vectors. Remembering that the power method underlies this technique, as we continue iterating, we reintroduce a nonzero contribution from the eigenvector associated to the largest eigenvalue. Consequently, we find the largest eigenvalue a second, and then a third, time. This is a spooky situation so we call these ghost eigenvalues. There is a rich theory that aims to exorcise them.    Legendre polynomials  Let's turn our attention to the inner product space of polynomials with the inner product . We also define the operator by , that is, multiplies a polynomial by . This is a self-adjoint operator because so we can apply Lanczos iteration to produce an orthogonal basis of for some finite .  We begin with , which defines . Our iterative steps have the form .  The following Sage cell implements this algorithm and displays the resulting polynomials with . Sage does not do a particularly good job of simplifying and displaying the polynomials.   You may notice that each polynomial has only even powers of if is even and only odd powers if is odd. For this reason, for all . That is, the diagonal entries of are zero. This can be used to simplify the computation further, but we will not explicitly make use of this fact since it does not hold in other, related situations.  The orthogonal polynomials we are creating are called Legendre polynomials . Technically speaking, they are scalar multiples of the Legendre polynomials . Our polynomials are normalized to have unit length in the inner product space, while Legendre polynomials are usually normalized so that .    Gaussian quadrature  By a quadrature , we mean a recipe for approximating a definite integral, such as for a set of weights and points called nodes . A simple quadrature is given by right endpoints, which is typically how a discussion of integrals begins: . It turns out that Legendre polynomials provide an excellent quadrature, as we will now explore.  In designing a quadrature, our goal is to create an accurate approximation for a large class of functions. If we have nodes, , a natural criterion is that our quadrature be exact on all polynomials having degree less than . We will see how to satisfy this criterion with an appropriate choice of weights .  With a given set of nodes , we define the Lagrange interpolating polynomial  where the terms are removed. Notice that and that . This means that the polynomials form a basis for . If we define , then the quadrature is exact on each and hence all of by linearity.  This says that we can choose any set of nodes and find a quadrature that is exact on . The Legendre polynomials give us a particularly good choice of nodes if we choose to be the roots of the degree Legendre polynomial . (These are also the roots of the classically defined Legendre polynomial since and differ by a scalar multiple.)  Let's explore why this is a good choice. We choose the weights so that the quadrature is exact on as just described. Suppose that is a polynomial whose degree is less than . By the Division Algorithm , we have where so that is in , which means that the quadrature is exact on . In addition so that can be written as a linear combination of , which means that is orthogonal to . We then have . The second equality is due to the fact that and are orthogonal, and the fourth equality follows from the fact that for all .  This is remarkable because it says that the quadrature defined in this way is exact on polynomials whose degree is less than . In other words, the degree to which we obtain accuracy is double what we would naively expect. This technique is called Gaussian quadrature.  Finding roots of polynomials is numerically unstable so we need a way to find the nodes , which are the roots of . Lanczos iteration can help with that. We will write out the steps in the iteration evaluating each of the polynomials at for one of the nodes. . However, since , the final expression reduces to . This means that if we define the matrix and vector , then we have . In other words, the nodes are the eigenvalues of the tridiagonal matrix and can be found with, say, the shifted algorithm. In addition, the eigenvectors are given by evaluating the Legendre polynomials at the nodes.    If is the tridiagonal matrix that results from steps of Lanczos iteration, then the eigenvalues of are , the roots of the Legendre polynomial .  Moreover, if we define eigenvectors , then the weights in the quadrature are given by .    We will not prove the statement about the weights in the quadrature, but this is again a remarkable turn of events since it implies that we can develop Gaussian quadrature using only numerically stable linear algebraic operations.  Evaluate the following cell to again define the function Q, T = lanczos(n) . We will use this in the next few cells.   We now choose a value of and find the nodes and weights for the quadrature. We also define a functionn quad(f) that computes the quadrature applied to the function   Due to the symmetry of the weights and nodes, the quadrature should be zero on all odd powers of , which we expect since the integral of an odd power is zero by symmetry. The following cell considers even powers and compares the result of the quadrature to the exact value .   Since , we expect the quadrature to be exact up to degree , and this demonstration confirms that expectation.  Finally, we compare the quadrature to the exact value for the function , which cannot be evaluated by antidifferentiation. This result has a relative error of less than .    "
},
{
  "id": "sec-lanczos-3-2",
  "level": "2",
  "url": "sec-lanczos.html#sec-lanczos-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Lanczos iteration. "
},
{
  "id": "sec-lanczos-4-7",
  "level": "2",
  "url": "sec-lanczos.html#sec-lanczos-4-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Legendre polynomials "
},
{
  "id": "sec-lanczos-5-2",
  "level": "2",
  "url": "sec-lanczos.html#sec-lanczos-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quadrature nodes "
},
{
  "id": "sec-lanczos-5-4",
  "level": "2",
  "url": "sec-lanczos.html#sec-lanczos-5-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Lagrange interpolating polynomial "
},
{
  "id": "sec-lanczos-5-7",
  "level": "2",
  "url": "sec-lanczos.html#sec-lanczos-5-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gaussian quadrature. "
},
{
  "id": "sec-lanczos-5-9",
  "level": "2",
  "url": "sec-lanczos.html#sec-lanczos-5-9",
  "type": "Theorem",
  "number": "3.4.1",
  "title": "",
  "body": "  If is the tridiagonal matrix that results from steps of Lanczos iteration, then the eigenvalues of are , the roots of the Legendre polynomial .  Moreover, if we define eigenvectors , then the weights in the quadrature are given by .   "
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
