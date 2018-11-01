package com.crud.restapihtml.service;


import java.util.List;


import com.crud.restapihtml.user.User;
import com.crud.restapihtml.util.ApplicationException;

/**
 * Service layer.
 *
 */
public interface UserService {
    /**
     * 
     * @param userid id.
     * @return User.
     */
    User getById(int userid);

    /**
     * 
     * @param user the user
     * @return user.
     * @throws ApplicationException if user details are invalid.
     */
    User save(User user) throws ApplicationException;

    /**
     * 
     * @param user user to be updated.
     * @return user updated.
     * @throws ApplicationException no userid.
     */
    User update(User user) throws ApplicationException;

    /**
     * 
     * @param userid to be deleted.
     */
    void delete(int userid);

    /**
     * 
     * @return list of all users.
     */
    List<User> findAll();
    /**
     * 
     * @param email emailid
     * @return email.
     */
    User findByEmail(String email);
}
