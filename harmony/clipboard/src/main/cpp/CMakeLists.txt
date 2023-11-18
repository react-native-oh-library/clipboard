cmake_minimum_required(VERSION 3.13)
set(CMAKE_VERBOSE_MAKEFILE on)

file(GLOB rnoh_clipboard_SRC CONFIGURE_DEPENDS *.cpp)
add_library(rnoh_clipboard SHARED ${rnoh_clipboard_SRC})
target_include_directories(rnoh_clipboard PUBLIC ${CMAKE_CURRENT_SOURCE_DIR})
target_link_libraries(rnoh_clipboard PUBLIC rnoh)