package com.crud.restapihtml.dao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crud.restapihtml.user.User;

/**
 * Data access layer for the application.
 *
 */
@Repository
public interface UserDao extends JpaRepository<User, Integer> {
   /**
    * 
    * @param email email
    * @return email 
    */
    User findByEmail(String email);

}
