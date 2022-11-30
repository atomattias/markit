﻿using JustGoApi.Models;
using JustGoApi.Services;
using JustGoApi.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace JustGoApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
       private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllUSer()
        {
            return Ok(await _userService.GetAllUsers());
        }
        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetOneUser(int id)
        {
          var user = await _userService.GetOneUser(id);
          if (user == null)
            {
              return NotFound();
            }
          return Ok(user);
        }   
    
        [HttpPost]
        public async Task<IActionResult> AddUser(AddUserRequest addUserRequest)
        {
            await _userService.AddUser(addUserRequest);
            return Ok();
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdateUser([FromRoute] int id,UpdateUserRequest updateUserRequest)
        {
            try
            {
                await _userService.UpdateUser(id, updateUserRequest);
                return Ok();
            }
            catch (Exception e)
            {
                if (e.Message.Contains("Not found"))
                {
                    return NotFound();
                }
                throw new Exception(e.Message);
            }
        }
    }
}
